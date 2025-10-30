import 'jsr:@supabase/functions-js/edge-runtime.d.ts';
import Stripe from 'npm:stripe@19.1.0';
import { createClient } from 'npm:@supabase/supabase-js@2.76.1';

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, stripe-signature",
};

const stripeSecret = Deno.env.get('STRIPE_SECRET_KEY')!;
const stripeWebhookSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET');
const stripe = new Stripe(stripeSecret, {
  apiVersion: "2025-09-30.clover" as any,
});

const supabase = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!);

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    if (req.method !== 'POST') {
      return new Response('Method not allowed', {
        status: 405,
        headers: corsHeaders
      });
    }

    const body = await req.text();
    const signature = req.headers.get('stripe-signature');

    let event: Stripe.Event;

    if (stripeWebhookSecret && signature) {
      try {
        event = await stripe.webhooks.constructEventAsync(body, signature, stripeWebhookSecret);
      } catch (error: any) {
        console.error(`Webhook signature verification failed: ${error.message}`);
        return new Response(`Webhook signature verification failed: ${error.message}`, {
          status: 400,
          headers: corsHeaders
        });
      }
    } else {
      event = JSON.parse(body);
      console.warn('Processing webhook without signature verification (not recommended for production)');
    }

    await handleEvent(event);

    return new Response(JSON.stringify({ received: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  } catch (error: any) {
    console.error('Error processing webhook:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
});

async function handleEvent(event: Stripe.Event) {
  console.log('Webhook event type:', event.type);

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        await handleCheckoutComplete(session);
        break;
      }
      case 'customer.subscription.updated':
      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription;
        await handleSubscriptionUpdate(subscription);
        break;
      }
      case 'invoice.payment_succeeded': {
        const invoice = event.data.object as Stripe.Invoice;
        await handleInvoicePaymentSucceeded(invoice);
        break;
      }
      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice;
        await handleInvoicePaymentFailed(invoice);
        break;
      }
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }
  } catch (error) {
    console.error(`Error handling event ${event.type}:`, error);
    throw error;
  }
}

async function handleCheckoutComplete(session: Stripe.Checkout.Session) {
  console.log('Handling checkout complete:', session.id);

  const userId = session.client_reference_id;
  const customerId = session.customer as string;

  if (!userId) {
    console.error('No user ID in checkout session');
    return;
  }

  const { error: userUpdateError } = await supabase
    .from('subscription_users')
    .update({
      stripe_customer_id: customerId,
      subscription_status: 'active',
      updated_at: new Date().toISOString(),
    })
    .eq('id', userId);

  if (userUpdateError) {
    console.error('Error updating user:', userUpdateError);
    throw userUpdateError;
  }

  const { error: paymentUpdateError } = await supabase
    .from('subscription_payments')
    .update({
      stripe_subscription_id: session.subscription as string,
      status: 'completed',
      updated_at: new Date().toISOString(),
    })
    .eq('stripe_session_id', session.id);

  if (paymentUpdateError) {
    console.error('Error updating payment:', paymentUpdateError);
  }

  console.log('Successfully updated subscription status to active');
}

async function handleSubscriptionUpdate(subscription: Stripe.Subscription) {
  console.log('Handling subscription update:', subscription.id);

  const customerId = subscription.customer as string;

  const statusMap: Record<string, string> = {
    'active': 'active',
    'past_due': 'past_due',
    'canceled': 'canceled',
    'incomplete': 'incomplete',
    'incomplete_expired': 'canceled',
    'trialing': 'trialing',
    'unpaid': 'past_due',
  };

  const newStatus = statusMap[subscription.status] || 'pending';

  const { error } = await supabase
    .from('subscription_users')
    .update({
      subscription_status: newStatus,
      updated_at: new Date().toISOString(),
    })
    .eq('stripe_customer_id', customerId);

  if (error) {
    console.error('Error updating subscription:', error);
    throw error;
  }

  console.log(`Updated subscription status to ${newStatus}`);
}

async function handleInvoicePaymentSucceeded(invoice: Stripe.Invoice) {
  console.log('Handling invoice payment succeeded:', invoice.id);

  const customerId = invoice.customer as string;

  const { error } = await supabase
    .from('subscription_users')
    .update({
      subscription_status: 'active',
      updated_at: new Date().toISOString(),
    })
    .eq('stripe_customer_id', customerId);

  if (error) {
    console.error('Error updating subscription after payment:', error);
    throw error;
  }
}

async function handleInvoicePaymentFailed(invoice: Stripe.Invoice) {
  console.log('Handling invoice payment failed:', invoice.id);

  const customerId = invoice.customer as string;

  const { error } = await supabase
    .from('subscription_users')
    .update({
      subscription_status: 'past_due',
      updated_at: new Date().toISOString(),
    })
    .eq('stripe_customer_id', customerId);

  if (error) {
    console.error('Error updating subscription after payment failure:', error);
    throw error;
  }
}