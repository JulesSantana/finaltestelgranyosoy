/*
  # Allow anonymous user creation for subscriptions
  
  1. Changes
    - Add INSERT policy for subscription_users to allow anonymous user registration
    - This is needed for the signup flow where users don't have auth tokens yet
  
  2. Security
    - Policy allows INSERT from anonymous and authenticated roles
    - Email uniqueness constraint prevents duplicate accounts
*/

CREATE POLICY "Allow user creation during signup"
  ON subscription_users
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);