/*
  # Fix RLS Policies for Subscription Users

  1. Changes
    - Drop existing restrictive policies
    - Create new policies that allow Edge Functions to insert/update
    - Keep secure read policies for authenticated users

  2. Security
    - Service role bypasses RLS by default
    - Authenticated users can only view their own data
    - Edge Functions using service role can create and update users
*/

-- Drop all existing policies
DROP POLICY IF EXISTS "Users can view own subscription data" ON subscription_users;
DROP POLICY IF EXISTS "Users can update own subscription data" ON subscription_users;
DROP POLICY IF EXISTS "Allow service to insert subscription users" ON subscription_users;
DROP POLICY IF EXISTS "Allow service to update subscription users" ON subscription_users;

-- Create policies for authenticated users (reading their own data)
CREATE POLICY "Users can view own subscription data"
  ON subscription_users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = auth_user_id);

CREATE POLICY "Users can update own profile"
  ON subscription_users
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = auth_user_id)
  WITH CHECK (auth.uid() = auth_user_id);

-- Note: Service role bypasses RLS, so no special policies needed for Edge Functions
-- The Edge Function uses SUPABASE_SERVICE_ROLE_KEY which automatically bypasses RLS