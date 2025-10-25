import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    const stripeKey = process.env.STRIPE_SECRET_KEY;

    const errors = [];

    if (!supabaseUrl) errors.push('Missing NEXT_PUBLIC_SUPABASE_URL');
    if (!supabaseKey) errors.push('Missing Supabase key');
    if (!stripeKey) errors.push('Missing STRIPE_SECRET_KEY');

    if (errors.length > 0) {
      return NextResponse.json({
        status: 'error',
        errors,
        env: {
          hasSupabaseUrl: !!supabaseUrl,
          hasSupabaseKey: !!supabaseKey,
          hasStripeKey: !!stripeKey,
        }
      }, { status: 500 });
    }

    const supabase = createClient(supabaseUrl!, supabaseKey!);
    const { data, error } = await supabase
      .from('subscription_users')
      .select('count')
      .limit(1);

    return NextResponse.json({
      status: 'success',
      message: 'All systems operational!',
      timestamp: new Date().toISOString(),
      env: {
        hasSupabaseUrl: true,
        hasSupabaseKey: true,
        hasStripeKey: true,
      },
      database: {
        connected: !error,
        error: error?.message
      }
    });
  } catch (error: any) {
    return NextResponse.json({
      status: 'error',
      message: error.message,
      stack: error.stack
    }, { status: 500 });
  }
}

export async function POST() {
  return NextResponse.json({
    message: 'POST request received!',
    timestamp: new Date().toISOString()
  });
}
