import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(request) {
  const url = new URL(request.url)
  const code = url.searchParams.get('code') // searchParams: to search query string

  if (code) {
    const supabase = createRouteHandlerClient({ cookies }) // every time you wanna comm w supabase, need an instance of supabase object; now we're in route handler so use this function - to connect to supabase from route handler
    await supabase.auth.exchangeCodeForSession(code) // passes code to supabase, supabase will exchange code for new session containing the cookie
  }

  return NextResponse.redirect(url.origin) // redirect to base address, but logged in
}