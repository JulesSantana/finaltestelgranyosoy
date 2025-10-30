/*
  # Add password_hash column to subscription_users table
  
  1. Changes
    - Add `password_hash` column to `subscription_users` table for storing hashed passwords
    - Column is nullable to maintain compatibility with existing records
  
  2. Notes
    - Existing users without password_hash can set it when they update their profile
    - New users will have this field populated during registration
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'subscription_users' AND column_name = 'password_hash'
  ) THEN
    ALTER TABLE subscription_users ADD COLUMN password_hash text;
  END IF;
END $$;