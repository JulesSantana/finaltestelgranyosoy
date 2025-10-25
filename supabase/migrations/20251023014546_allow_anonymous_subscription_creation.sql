/*
  # Allow Anonymous Subscription Creation

  1. Changes
    - Add policy to allow anonymous users (anon role) to insert into subscription_users
    - Add policy to allow anonymous users (anon role) to insert into subscription_payments
    - These policies are necessary for the public subscription form to work
  
  2. Security
    - Anonymous users can only INSERT, not read, update, or delete
    - RLS remains enabled
    - Authenticated users and service role retain their existing permissions
*/

-- Allow anonymous users to create subscription accounts
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'subscription_users' 
    AND policyname = 'Anonymous users can create subscriptions'
  ) THEN
    CREATE POLICY "Anonymous users can create subscriptions"
      ON subscription_users FOR INSERT
      TO anon
      WITH CHECK (true);
  END IF;
END $$;

-- Allow anonymous users to create payment records
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'subscription_payments' 
    AND policyname = 'Anonymous users can create payment records'
  ) THEN
    CREATE POLICY "Anonymous users can create payment records"
      ON subscription_payments FOR INSERT
      TO anon
      WITH CHECK (true);
  END IF;
END $$;