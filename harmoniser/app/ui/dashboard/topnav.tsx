'use client';

import { User, createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { FormEvent, useEffect, useState } from 'react'

import type { Database } from '@/app/lib/database.types'

import NavLinks from '@/app/ui/dashboard/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';

/**
 * Creates the Top Nav bar with links to subpages and a signout option.
 * This also has the code that handles signout!
 */
export default function TopNav() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)

  const supabase = createClientComponentClient<Database>()  // connect this page to supabase

  // gets the user so that when they signout, this file can handle it!
  useEffect(() => {
    async function getUser() {
      const {data: {user}} = await supabase.auth.getUser()
      setUser(user)
    }

    getUser()
  }, [])

  // sets the user to null, causes supabase authentication for this login session to end and user gets routed to landing page
  const handleSignOut = async (event: FormEvent) => {
    event.preventDefault();
    await supabase.auth.signOut()
    
    setUser(null)
    router.refresh()
    
  }

  // Returns the nav bar in a div with all links inside it :)
  return (
    <div className="flex h-full flex-row px-3 py-4 md:px-2">
      <div className="flex grow flex-row justify-between gap-2 space-x-2 md:flex-row md:space-x-0 md:space-y-2">
        <div className="flex h-[48px] grow text-colors_default items-center !justify-center gap-2 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3 rounded-md bg-headerblock w-32 md:w-40">
          <p>Welcome, Listener.</p>
        </div>
        <NavLinks />
        <div className="!mt-0 hidden h-[48px] w-full rounded-md bg-block md:block"></div>
        <form onSubmit={handleSignOut} className="!mt-0">
          <button className="flex h-[48px] w-full grow text-colors_default items-center justify-center gap-2 rounded-md bg-block p-3 text-sm font-medium hover:bg-headerblock hover:text-colours-5 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}