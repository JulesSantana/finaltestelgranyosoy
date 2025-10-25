/*
  # Create Subscription System Tables

  1. New Tables
    - `subscription_users`
      - `id` (uuid, primary key)
      - `name` (text, full name)
      - `email` (text, unique, email address)
      - `password_hash` (text, hashed password)
      - `subscription_amount` (integer, amount in cents)
      - `stripe_customer_id` (text, Stripe customer ID)
      - `subscription_status` (text, status: pending, active, canceled)
      - `created_at` (timestamptz, creation timestamp)
      - `updated_at` (timestamptz, update timestamp)
    
    - `subscription_payments`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key to subscription_users)
      - `stripe_session_id` (text, Stripe checkout session ID)
      - `stripe_subscription_id` (text, Stripe subscription ID)
      - `amount` (integer, payment amount in cents)
      - `currency` (text, currency code)
      - `status` (text, payment status)
      - `created_at` (timestamptz, creation timestamp)
  
  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users to read their own data
    - Service role can manage all data
*/

-- Create subscription_users table
CREATE TABLE IF NOT EXISTS subscription_users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text UNIQUE NOT NULL,
  password_hash text NOT NULL,
  subscription_amount integer NOT NULL CHECK (subscription_amount >= 100 AND subscription_amount <= 100000),
  stripe_customer_id text,
  subscription_status text NOT NULL DEFAULT 'pending' CHECK (subscription_status IN ('pending', 'active', 'canceled', 'incomplete')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create subscription_payments table
CREATE TABLE IF NOT EXISTS subscription_payments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES subscription_users(id) ON DELETE CASCADE,
  stripe_session_id text UNIQUE NOT NULL,
  stripe_subscription_id text,
  amount integer NOT NULL,
  currency text NOT NULL DEFAULT 'usd',
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'failed', 'refunded')),
  created_at timestamptz DEFAULT now()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_subscription_users_email ON subscription_users(email);
CREATE INDEX IF NOT EXISTS idx_subscription_users_stripe_customer ON subscription_users(stripe_customer_id);
CREATE INDEX IF NOT EXISTS idx_subscription_payments_user_id ON subscription_payments(user_id);
CREATE INDEX IF NOT EXISTS idx_subscription_payments_session_id ON subscription_payments(stripe_session_id);

-- Enable Row Level Security
ALTER TABLE subscription_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscription_payments ENABLE ROW LEVEL SECURITY;

-- Policies for subscription_users
CREATE POLICY "Users can read own subscription data"
  ON subscription_users FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Service role can manage all subscription users"
  ON subscription_users FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Policies for subscription_payments
CREATE POLICY "Users can read own payment history"
  ON subscription_payments FOR SELECT
  TO authenticated
  USING (
    user_id IN (
      SELECT id FROM subscription_users WHERE auth.uid() = id
    )
  );

CREATE POLICY "Service role can manage all payments"
  ON subscription_payments FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to automatically update updated_at
CREATE TRIGGER update_subscription_users_updated_at
  BEFORE UPDATE ON subscription_users
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();