import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Dash',
};

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from 'next/server'

import type { Database } from '@/app/lib/database.types'

import Visualiser from "../ui/dashboard/home-video";
import { comfortaa } from "../ui/fonts";
import Link from "next/link";

export default async function Page() {
  const cookieStore = cookies()
  const supabase = createServerComponentClient<Database>({ cookies: () => cookieStore })
  const { data: {user} } = await supabase.auth.getUser()

  // console.log({user})

  // if (!user) {
  //   return (
  //     <Link href={'/login'}>
  //       You are not logged in. Click here to log in.
  //     </Link>
  //   )
  // }

  const tempvis = Visualiser('hello');

  return <div className={`rounded-lg bg-block p-6`}>
  <h1 className={`${comfortaa.className} text-colors_default text-2xl md:text-3xl`}>Placeholder</h1><br></br>
    {tempvis}
  </div>;
}