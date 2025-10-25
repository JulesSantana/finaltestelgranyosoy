import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

export const dynamic = 'force-dynamic';

function getSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error('Missing Supabase environment variables');
  }

  return createClient(supabaseUrl, supabaseKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  });
}

function getStripeClient() {
  const stripeKey = process.env.STRIPE_SECRET_KEY;

  if (!stripeKey) {
    throw new Error('Missing Stripe secret key');
  }

  return new Stripe(stripeKey, {
    apiVersion: '2025-09-30.clover',
  });
}

export async function POST(req: NextRequest) {
  try {
    const supabase = getSupabaseClient();
    const stripe = getStripeClient();
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

    if (!webhookSecret) {
      throw new Error('Missing Stripe webhook secret');
    }

    const body = await req.text();
    const signature = req.headers.get('stripe-signature');

    if (!signature) {
      console.error('Missing stripe-signature header');
      return NextResponse.json(
        { error: 'Missing stripe-signature header' },
        { status: 400 }
      );
    }

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err: any) {
      console.error('Webhook signature verification failed:', err.message);
      return NextResponse.json(
        { error: `Webhook signature verification failed: ${err.message}` },
        { status: 400 }
      );
    }

    console.log('Received Stripe event:', event.type);

    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        console.log('Checkout session completed:', session.id);

        const userId = session.client_reference_id || session.metadata?.user_id;
        const subscriptionId = session.subscription as string;

        if (!userId) {
          console.error('No user ID found in session');
          break;
        }

        const { error: updateUserError } = await supabase
          .from('subscription_users')
          .update({
            subscription_status: 'active',
            stripe_customer_id: session.customer as string,
          })
          .eq('id', userId);

        if (updateUserError) {
          console.error('Error updating user subscription status:', updateUserError);
        } else {
          console.log('User subscription activated:', userId);
        }

        const { error: updatePaymentError } = await supabase
          .from('subscription_payments')
          .update({
            status: 'completed',
            stripe_subscription_id: subscriptionId,
          })
          .eq('stripe_session_id', session.id);

        if (updatePaymentError) {
          console.error('Error updating payment status:', updatePaymentError);
        } else {
          console.log('Payment record updated:', session.id);
        }

        console.log('Successfully processed checkout.session.completed event');
        break;
      }

      case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription;
        console.log('Subscription updated:', subscription.id);

        const { data: user } = await supabase
          .from('subscription_users')
          .select('id')
          .eq('stripe_customer_id', subscription.customer as string)
          .maybeSingle();

        if (user) {
          const status = subscription.status === 'active' ? 'active' :
                        subscription.status === 'canceled' ? 'canceled' : 'incomplete';

          await supabase
            .from('subscription_users')
            .update({ subscription_status: status })
            .eq('id', user.id);

          console.log('User subscription status updated:', status);
        }
        break;
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription;
        console.log('Subscription deleted:', subscription.id);

        const { data: user } = await supabase
          .from('subscription_users')
          .select('id')
          .eq('stripe_customer_id', subscription.customer as string)
          .maybeSingle();

        if (user) {
          await supabase
            .from('subscription_users')
            .update({ subscription_status: 'canceled' })
            .eq('id', user.id);

          console.log('User subscription canceled:', user.id);
        }
        break;
      }

      case 'invoice.payment_succeeded': {
        const invoice = event.data.object as Stripe.Invoice;
        console.log('Invoice payment succeeded:', invoice.id);
        break;
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice;
        console.log('Invoice payment failed:', invoice.id);
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error: any) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: error.message || 'Webhook handler failed' },
      { status: 500 }
    );
  }
}
