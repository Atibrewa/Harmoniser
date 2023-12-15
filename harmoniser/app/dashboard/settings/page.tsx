'use client'

import { comfortaa, verdana, verdana_italic } from "@/app/ui/fonts";
import dynamic from 'next/dynamic';

// 
export default function Page() {
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