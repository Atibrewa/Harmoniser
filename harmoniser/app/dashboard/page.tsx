import { Metadata } from 'next';

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import type { Database } from '@/app/lib/database.types'

import Visualiser from "../ui/dashboard/home-video";
import { comfortaa } from "../ui/fonts";

// Title will show up as 'Credits | Harmoniser'
export const metadata: Metadata = {
  title: 'Dash',
};

/**
 * This is the dashboard, this page (and all its subpages) becomes accessible only once a user is logged in and authenticated through supabase
 * A placeholder video  element with our welcome video is also rendered so that replacing it with the actual visualisers is easy!
 */
export default async function Page() {
  const cookieStore = cookies()
  const supabase = createServerComponentClient<Database>({ cookies: () => cookieStore })
  const { data: {user} } = await supabase.auth.getUser()
  // Once the user is authenticated through supabase, we render the rest of the page!

  // Creates a default visualiser with the home video! 
  const tempvis = Visualiser();

  // Returns some text and the visualiser element wrapped in a div
  return <div className={`rounded-lg bg-block p-6`}>
  <h1 className={`${comfortaa.className} text-colors_default text-2xl md:text-3xl`}>Placeholder</h1><br></br>
    {tempvis}
  </div>;
}