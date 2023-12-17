import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'
import type { Database } from '@/app/lib/database.types'

/**
 * Sets up code exchange route to exchange an auth code for the user's session.
 */
export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  if (code) {
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient<Database>({ cookies: () => cookieStore })
    await supabase.auth.exchangeCodeForSession(code)   // exchange code to set up cookies
  }

  // URL to redirect to after sign in process completes
  return NextResponse.redirect(requestUrl.origin)   // origin = back to application (where exactly?)
}