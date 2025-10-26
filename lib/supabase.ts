import { createClient, SupabaseClient } from '@supabase/supabase-js';

let supabaseInstance: SupabaseClient | null = null;

function initializeSupabase(): SupabaseClient {
  if (supabaseInstance) {
    return supabaseInstance;
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Supabase environment variables are missing');

    return createClient(
      'https://mifubfrrjpqdnzizjocy.supabase.co',
      'placeholder-key'
    );
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
    const value = client[prop as keyof SupabaseClient];

    if (typeof value === 'function') {
      return value.bind(client);
    }
    return value;
  }
});
