import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import bcrypt from 'bcryptjs';
import { createClient } from '@supabase/supabase-js';

export const dynamic = 'force-dynamic';

function getSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  console.log('Supabase keys available:', {
    url: !!url,
    serviceKey: !!serviceKey,
    anonKey: !!anonKey,
    usingServiceKey: !!serviceKey
  });

  const key = serviceKey || anonKey;

  if (!url || !key) {
    console.error('Missing Supabase credentials:', { url: !!url, key: !!key });
    throw new Error('Supabase configuration is missing');
  }

  return createClient(url, key, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  });
}

function getStripeClient() {
  const key = process.env.STRIPE_SECRET_KEY;

  if (!key) {
    console.error('Missing Stripe secret key');
    throw new Error('Stripe configuration is missing');
  }

  return new Stripe(key, {
    apiVersion: '2025-09-30.clover',
  });
}

export async function POST(req: NextRequest) {
  console.log('=== Checkout Session API Called ===');
  try {
    console.log('Initializing clients...');
    const supabase = getSupabaseClient();
    const stripe = getStripeClient();

    const body = await req.json();
    console.log('Request body received:', { ...body, password: '[REDACTED]' });
    const { name, email, password, amount, nombres, apellidos, documento, pais, edad, telefono, direccion } = body;

    if (!name || !email || !password || !amount) {
      console.log('Missing required fields');
      return NextResponse.json(
        { error: 'Missing required fields: name, email, password, amount' },
        { status: 400 }
      );
    }

    const amountInCents = Math.round(parseFloat(amount) * 100);

    if (amountInCents < 100 || amountInCents > 100000) {
      return NextResponse.json(
        { error: 'Amount must be between $1 and $1000 USD' },
        { status: 400 }
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        { error: 'Password must be at least 8 characters long' },
        { status: 400 }
      );
    }

    console.log('Checking for existing user...');
    const { data: existingUser, error: checkError } = await supabase
      .from('subscription_users')
      .select('id')
      .eq('email', email)
      .maybeSingle();

    if (checkError) {
      console.error('Error checking existing user:', checkError);
    }

    if (existingUser) {
      console.log('User already exists');
      return NextResponse.json(
        { error: 'A user with this email already exists' },
        { status: 400 }
      );
    }

    console.log('Hashing password...');
    const passwordHash = await bcrypt.hash(password, 10);

    console.log('Creating new user...');
    const { data: newUser, error: userError } = await supabase
      .from('subscription_users')
      .insert({
        name,
        email,
        password_hash: passwordHash,
        subscription_amount: amountInCents,
        subscription_status: 'pending',
      })
      .select()
      .single();

    if (userError || !newUser) {
      console.error('Error creating user:', userError);
      console.error('Error details:', {
        code: userError?.code,
        message: userError?.message,
        details: userError?.details,
        hint: userError?.hint
      });
      return NextResponse.json(
        {
          error: 'Failed to create user account',
          details: userError?.message,
          code: userError?.code,
          hint: userError?.hint
        },
        { status: 500 }
      );
    }

    console.log('User created successfully:', newUser.id);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Suscripción Mensual Personalizada - Celebrando con Jesús',
              description: `Suscripción mensual por $${(amountInCents / 100).toFixed(2)} USD`,
            },
            recurring: {
              interval: 'month',
            },
            unit_amount: amountInCents,
          },
          quantity: 1,
        },
      ],
      customer_email: email,
      client_reference_id: newUser.id,
      metadata: {
        user_id: newUser.id,
        user_name: name,
        user_email: email,
        nombres: nombres || '',
        apellidos: apellidos || '',
        documento: documento || '',
        pais: pais || '',
        edad: edad || '',
        telefono: telefono || '',
        direccion: direccion || '',
      },
      success_url: `${req.headers.get('origin')}/suscripciones/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get('origin')}/suscripciones/cancel`,
    });

    const { error: paymentError } = await supabase
      .from('subscription_payments')
      .insert({
        user_id: newUser.id,
        stripe_session_id: session.id,
        amount: amountInCents,
        currency: 'usd',
        status: 'pending',
      });

    if (paymentError) {
      console.error('Error creating payment record:', paymentError);
    }

    console.log('Checkout session created successfully:', session.id);
    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error: any) {
    console.error('=== ERROR in checkout session ===');
    console.error('Error type:', error.constructor.name);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);

    return NextResponse.json(
      { error: error.message || 'Internal server error', type: error.constructor.name },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  return NextResponse.json({ message: 'This endpoint only accepts POST requests' }, { status: 405 });
}
