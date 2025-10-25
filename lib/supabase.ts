import { createClient, SupabaseClient } from '@supabase/supabase-js';

let supabaseInstance: SupabaseClient | null = null;

function getSupabaseUrl() {
  if (typeof window !== 'undefined') {
    return process.env.NEXT_PUBLIC_SUPABASE_URL;
  }
  return process.env.NEXT_PUBLIC_SUPABASE_URL || '';
}

function getSupabaseKey() {
  if (typeof window !== 'undefined') {
    return process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  }
  return process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
}

function initializeSupabase() {
  if (supabaseInstance) {
    return supabaseInstance;
  }

  const supabaseUrl = getSupabaseUrl();
  const supabaseAnonKey = getSupabaseKey();

  if (!supabaseUrl || !supabaseAnonKey) {
    if (typeof window !== 'undefined') {
      throw new Error('Missing Supabase environment variables');
    }
    return null as any;
  }

  supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);
  return supabaseInstance;
}

export const supabase = new Proxy({} as SupabaseClient, {
  get(_target, prop) {
    if (prop === 'then' || prop === 'catch' || prop === 'finally' || prop === Symbol.toStringTag) {
      return undefined;
    }

    const client = initializeSupabase();
    if (!client) {
      return undefined;
    }

    const value = client[prop as keyof SupabaseClient];

    if (typeof value === 'function') {
      return value.bind(client);
    }
    return value;
  }
});
