import { createClient } from '@supabase/supabase-js'

const url = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const service = process.env.SUPABASE_SERVICE_ROLE_KEY as string | undefined
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

export const supabaseServer = () => {
  if (service) return createClient(url, service)
  return createClient(url, anon)
}
