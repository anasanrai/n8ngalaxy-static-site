import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    // Return a dummy client for build time or development without env vars
    console.warn('Supabase URL or Anon Key is missing. Returning a dummy client.');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return {} as any;
  }

  return createBrowserClient(url, anonKey)
}
