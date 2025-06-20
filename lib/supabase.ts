import { createClient, type SupabaseClient } from "@supabase/supabase-js"

let supabase: SupabaseClient | null = null

export function getSupabaseClient(): SupabaseClient {
  if (!supabase) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    if (!url) {
      throw new Error("Missing env.NEXT_PUBLIC_SUPABASE_URL")
    }

    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    if (!key) {
      throw new Error("Missing env.NEXT_PUBLIC_SUPABASE_ANON_KEY")
    }

    supabase = createClient(url, key)
  }

  return supabase
}

