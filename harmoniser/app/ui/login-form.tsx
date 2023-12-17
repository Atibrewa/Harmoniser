'use client';

import { User, createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { FormEvent, useEffect, useState } from 'react'

import type { Database } from '@/app/lib/database.types'

import { verdana } from '@/app/ui/fonts';
import {
  AtSymbolIcon,
  KeyIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from './button';
import Link from 'next/link';

/**
 * Creates the login form for the Login Page and handles user login authentication.
 */

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  const supabase = createClientComponentClient<Database>()  // connect this page to supabase

  useEffect(() => {
    async function getUser() {
      const {data: {user}} = await supabase.auth.getUser()
      setUser(user)
      setLoading(false)
    }

    getUser()
  }, [])

  const handleLogIn = async (event: FormEvent) => {
    event.preventDefault();
    const res = await supabase.auth.signInWithPassword({
      email,
      password
    })
    setUser(res.data.user)
    router.push('/dashboard')
    setEmail('')
    setPassword('')
  }

  // console.log({loading, user})

  if (loading) {
    return <div>
    <h1 className={`${verdana.className}`}>
      Loading...
    </h1>
  </div>
  }

  return (
    <form onSubmit={handleLogIn} className="space-y-3">
      <div className="flex-1 rounded-lg bg-colours-2 px-6 pb-4 pt-8">
        <h1 className={`${verdana.className} mb-3 text-2xl`}>
          Please log in to continue.
        </h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
                onChange={(e) => setEmail(e.target.value)} 
                value={email}
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
        
        <Button 
          className="mt-4 w-full bg-colours-5 hover:bg-colours-4"
        >
          Log In <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
        </Button>

        <Link 
          className="flex items-center mt-4 w-full gap-5 self-start rounded-lg bg-colours-4 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-colours-5 lg:text-base"
          href="/signup"
        >
          No account? Sign up!
        </Link>

        <div className="flex h-8 items-end space-x-1">
          {/* Add form errors here */}
        </div>
      </div>
    </form>
  );
}

