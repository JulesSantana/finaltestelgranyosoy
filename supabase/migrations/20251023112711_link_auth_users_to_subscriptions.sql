/*
  # Link Auth Users to Subscription Data

  1. Changes
    - Add user_id column to subscription_users table to link with auth.users
    - Add status column (renamed from subscription_status for consistency)
    - Add plan_type column for monthly/annual distinction
    - Add current_period_end column for subscription end date
    - Update RLS policies to work with authenticated users
    
  2. Security
    - Enable RLS on subscription_users table
    - Add policies for authenticated users to read their own subscription data
*/

-- Add new columns to subscription_users if they don't exist
DO $$
BEGIN
  -- Add user_id column to link with auth.users
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'subscription_users' AND column_name = 'user_id'
  ) THEN
    ALTER TABLE subscription_users ADD COLUMN user_id uuid REFERENCES auth.users(id);
  END IF;

  -- Add status column (for subscription status)
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'subscription_users' AND column_name = 'status'
  ) THEN
    ALTER TABLE subscription_users ADD COLUMN status text DEFAULT 'pending' CHECK (status IN ('pending', 'active', 'canceled', 'incomplete', 'past_due'));
  END IF;

  -- Add plan_type column
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'subscription_users' AND column_name = 'plan_type'
  ) THEN
    ALTER TABLE subscription_users ADD COLUMN plan_type text DEFAULT 'monthly' CHECK (plan_type IN ('monthly', 'annual'));
  END IF;

  -- Add current_period_end column
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'subscription_users' AND column_name = 'current_period_end'
  ) THEN
    ALTER TABLE subscription_users ADD COLUMN current_period_end timestamp with time zone;
  END IF;
END $$;

-- Update existing records to copy subscription_status to status if status is null
UPDATE subscription_users 
SET status = subscription_status 
WHERE status IS NULL AND subscription_status IS NOT NULL;

-- Enable RLS
ALTER TABLE subscription_users ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Users can read own subscription" ON subscription_users;
DROP POLICY IF EXISTS "Users can update own subscription" ON subscription_users;
DROP POLICY IF EXISTS "Allow anonymous insert for signup" ON subscription_users;

-- Create new RLS policies
CREATE POLICY "Users can read own subscription"
  ON subscription_users FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own subscription"
  ON subscription_users FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Allow anonymous insert for signup"
  ON subscription_users FOR INSERT
  TO anon
  WITH CHECK (true);
