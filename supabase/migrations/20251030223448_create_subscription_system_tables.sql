/*
  # Create Subscription System Tables

  1. New Tables
    - `subscription_users`
      - `id` (uuid, primary key) - Unique identifier for each user
      - `name` (text) - Full name of the user
      - `email` (text, unique) - User's email address
      - `password_hash` (text) - Hashed password for authentication
      - `subscription_amount` (integer) - Monthly subscription amount in cents
      - `subscription_status` (text) - Status: pending, active, canceled, incomplete
      - `stripe_customer_id` (text, nullable) - Stripe customer ID
      - `current_period_end` (timestamptz, nullable) - End of current billing period
      - `created_at` (timestamptz) - Record creation timestamp
      - `updated_at` (timestamptz) - Record update timestamp

    - `subscription_payments`
      - `id` (uuid, primary key) - Unique identifier for each payment
      - `user_id` (uuid, foreign key) - Reference to subscription_users
      - `stripe_session_id` (text) - Stripe checkout session ID
      - `stripe_subscription_id` (text, nullable) - Stripe subscription ID
      - `amount` (integer) - Payment amount in cents
      - `currency` (text) - Currency code (e.g., 'usd')
      - `status` (text) - Payment status: pending, completed, failed
      - `created_at` (timestamptz) - Record creation timestamp
      - `updated_at` (timestamptz) - Record update timestamp

  2. Security
    - Enable RLS on both tables
    - Allow anonymous users to create accounts
    - Users can only view their own subscription data
    - Authenticated users can read their own payment history
    
  3. Indexes
    - Index on email for faster user lookups
    - Index on stripe_customer_id for webhook processing
    - Index on user_id in payments table for efficient queries

  4. Important Notes
    - All timestamps use timestamptz for timezone awareness
    - Amounts stored in cents to avoid floating-point issues
    - Status fields use text for flexibility in status values
    - Foreign key ensures referential integrity between users and payments
*/

CREATE TABLE IF NOT EXISTS subscription_users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text UNIQUE NOT NULL,
  password_hash text NOT NULL,
  subscription_amount integer NOT NULL DEFAULT 0,
  subscription_status text NOT NULL DEFAULT 'pending',
  stripe_customer_id text,
  current_period_end timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS subscription_payments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES subscription_users(id) ON DELETE CASCADE,
  stripe_session_id text NOT NULL,
  stripe_subscription_id text,
  amount integer NOT NULL,
  currency text NOT NULL DEFAULT 'usd',
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_subscription_users_email ON subscription_users(email);
CREATE INDEX IF NOT EXISTS idx_subscription_users_stripe_customer_id ON subscription_users(stripe_customer_id);
CREATE INDEX IF NOT EXISTS idx_subscription_payments_user_id ON subscription_payments(user_id);
CREATE INDEX IF NOT EXISTS idx_subscription_payments_stripe_session_id ON subscription_payments(stripe_session_id);

ALTER TABLE subscription_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscription_payments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own subscription data"
  ON subscription_users
  FOR SELECT
  TO authenticated
  USING (auth.uid()::text = id::text);

CREATE POLICY "Users can update own subscription data"
  ON subscription_users
  FOR UPDATE
  TO authenticated
  USING (auth.uid()::text = id::text)
  WITH CHECK (auth.uid()::text = id::text);

CREATE POLICY "Users can view own payment history"
  ON subscription_payments
  FOR SELECT
  TO authenticated
  USING (
    user_id::text IN (
      SELECT id::text FROM subscription_users WHERE auth.uid()::text = id::text
    )
  );

CREATE POLICY "Allow anonymous user creation"
  ON subscription_users
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow anonymous payment creation"
  ON subscription_payments
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Service can update users"
  ON subscription_users
  FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Service can update payments"
  ON subscription_payments
  FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);