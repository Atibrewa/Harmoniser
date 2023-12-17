'use client'

import { comfortaa, verdana, verdana_italic } from "@/app/ui/fonts";
import dynamic from 'next/dynamic';

/**
 * This page has the dark mode switcher and will have the colourblind mode once implementation is complete
 * For more specific info on how there switchers work, you can look at their respective files.
 * This file simply creates a theme switcher object and places it on the page.
 */
export default function Page() {
  // Declaring Tailwind styling needed for elements on this page as variables for easy use!
  const h2 = `${verdana_italic.className} text-lg md:text-xl text-colors_default`
  const p = `${verdana.className} text-sm md:text-base`
  const DynamicThemeSwitcher = dynamic(() => import('@/app/ui/theme-switcher'), {
    ssr: false,
  });

  return <div className={`rounded-lg bg-block p-6`}>
    <h1 className={`${comfortaa.className} text-2xl md:text-3xl text-colors_default`}>Settings</h1><br></br>
    <h2 className={h2}>Hi there! We're working on adding a colour blind mode and other fun settings soon! Currently we have
    implemented a dark mode toggle. Hang tight :)</h2>
    <div className="flex flex-row p-6">
      <DynamicThemeSwitcher />
      <p className={`text-colors_default mt-auto mb-auto`}>Light/Dark Mode Toggle</p>
    </div>
  </div>

}