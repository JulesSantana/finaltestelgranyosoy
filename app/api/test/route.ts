import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const supabaseUrl = "postgresql://neondb_owner:npg_7sjaGVgz6HLN@ep-dry-sound-aetjqtbg-pooler.c-2.us-east-2.aws.neon.tech/neondb?channel_binding=require&sslmode=require"; //Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = "sb_secret_0RPEz8ptHiGnnX5MI4bpIw_CUGbtbcR"; // Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const stripeKey = "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\n" +
        "pk_live_51SK0tdIUlX2ykqnUUJWuOpuiDpTLRlzdU2PH7cYVE5wsmi8XYb0hm9ZcaNXckK0LAbMjg3DAwLxs1V9dYg1MrsCB00SaIXEFky"; //Deno.env.get("STRIPE_SECRET_KEY");    


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
