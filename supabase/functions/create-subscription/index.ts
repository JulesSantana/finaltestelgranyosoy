import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2.76.1";
import Stripe from "npm:stripe@19.1.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const supabaseUrl = "postgresql://neondb_owner:npg_7sjaGVgz6HLN@ep-dry-sound-aetjqtbg-pooler.c-2.us-east-2.aws.neon.tech/neondb?channel_binding=require&sslmode=require"; //Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = "sb_secret_0RPEz8ptHiGnnX5MI4bpIw_CUGbtbcR"; // Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const stripeSecretKey = "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\n" +
        "pk_live_51SK0tdIUlX2ykqnUUJWuOpuiDpTLRlzdU2PH7cYVE5wsmi8XYb0hm9ZcaNXckK0LAbMjg3DAwLxs1V9dYg1MrsCB00SaIXEFky"; //Deno.env.get("STRIPE_SECRET_KEY");

    if (!stripeSecretKey) {
      return new Response(
        JSON.stringify({ error: "Stripe is not configured" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: "2025-09-30.clover" as any,
    });

    const body = await req.json();
    const { name, email, password, amount, nombres, apellidos, documento, pais, edad, telefono, direccion, origin } = body;

    if (!name || !email || !password || !amount) {
      return new Response(
        JSON.stringify({ error: "Missing required fields: name, email, password, amount" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const amountInCents = Math.round(parseFloat(amount) * 100);

    if (amountInCents < 100 || amountInCents > 100000) {
      return new Response(
        JSON.stringify({ error: "Amount must be between $1 and $1000 USD" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    if (password.length < 8) {
      return new Response(
        JSON.stringify({ error: "Password must be at least 8 characters long" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const { data: existingUser } = await supabase
      .from("subscription_users")
      .select("id")
      .eq("email", email)
      .maybeSingle();

    if (existingUser) {
      return new Response(
        JSON.stringify({ error: "A user with this email already exists" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const passwordHash = await hashPassword(password);

    const { data: newUser, error: userError } = await supabase
      .from("subscription_users")
      .insert({
        name,
        email,
        password_hash: passwordHash,
        subscription_amount: amountInCents,
        subscription_status: "pending",
      })
      .select()
      .single();

    if (userError || !newUser) {
      console.error("Error creating user:", userError);
      return new Response(
        JSON.stringify({
          error: "Failed to create user account",
          details: userError?.message,
        }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "subscription",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Suscripción Mensual Personalizada - Celebrando con Jesús",
              description: `Suscripción mensual por $${(amountInCents / 100).toFixed(2)} USD`,
            },
            recurring: {
              interval: "month",
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
        nombres: nombres || "",
        apellidos: apellidos || "",
        documento: documento || "",
        pais: pais || "",
        edad: edad || "",
        telefono: telefono || "",
        direccion: direccion || "",
      },
      success_url: `${origin}/suscripciones/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/suscripciones/cancel`,
    });

    await supabase
      .from("subscription_payments")
      .insert({
        user_id: newUser.id,
        stripe_session_id: session.id,
        amount: amountInCents,
        currency: "usd",
        status: "pending",
      });

    return new Response(
      JSON.stringify({ sessionId: session.id, url: session.url }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    console.error("Error in create-subscription:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Internal server error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
