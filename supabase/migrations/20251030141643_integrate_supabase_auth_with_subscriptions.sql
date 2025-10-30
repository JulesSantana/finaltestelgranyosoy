/*
  # Integrate Supabase Auth with Subscription System

  1. Changes to subscription_users table
    - Add `auth_user_id` column to link with Supabase auth.users
    - Remove `password_hash` column (Supabase Auth handles this)
    - Keep all other subscription-related fields
    - Add unique constraint on auth_user_id

  2. Security Updates
    - Update RLS policies to use auth.uid() for better security
    - Ensure policies work with authenticated users

  3. Important Notes
    - This migration connects the custom subscription system with Supabase Auth
    - Users created during subscription will now have proper auth accounts
    - Login will work seamlessly after subscription
*/

-- Add auth_user_id column to link with Supabase auth.users
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'subscription_users' AND column_name = 'auth_user_id'
  ) THEN
    ALTER TABLE subscription_users ADD COLUMN auth_user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE;
    CREATE UNIQUE INDEX IF NOT EXISTS idx_subscription_users_auth_user_id ON subscription_users(auth_user_id);
  END IF;
END $$;

-- Remove password_hash column as Supabase Auth handles authentication
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'subscription_users' AND column_name = 'password_hash'
  ) THEN
    ALTER TABLE subscription_users DROP COLUMN password_hash;
  END IF;
END $$;

-- Drop old policies
DROP POLICY IF EXISTS "Users can view own subscription data" ON subscription_users;
DROP POLICY IF EXISTS "Users can update own subscription data" ON subscription_users;
DROP POLICY IF EXISTS "Service can insert users" ON subscription_users;
DROP POLICY IF EXISTS "Service can update users" ON subscription_users;

-- Create new policies using auth.uid()
CREATE POLICY "Users can view own subscription data"
  ON subscription_users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = auth_user_id);

CREATE POLICY "Users can update own subscription data"
  ON subscription_users
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = auth_user_id)
  WITH CHECK (auth.uid() = auth_user_id);

CREATE POLICY "Allow service to insert subscription users"
  ON subscription_users
  FOR INSERT
  TO authenticated, anon
  WITH CHECK (true);

CREATE POLICY "Allow service to update subscription users"
  ON subscription_users
  FOR UPDATE
  TO authenticated, anon
  USING (true)
  WITH CHECK (true);