/*
  # Allow anonymous payment record creation
  
  1. Changes
    - Add INSERT policy for subscription_payments to allow creating payment records
    - This is needed when creating checkout sessions
  
  2. Security
    - Policy allows INSERT from anonymous and authenticated roles
    - Foreign key constraint ensures user_id references valid user
*/

CREATE POLICY "Allow payment record creation"
  ON subscription_payments
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);