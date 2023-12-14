import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Help',
};

import { comfortaa, verdana, verdana_italic } from "@/app/ui/fonts"

export default function Page() {
  const h2 = `${verdana_italic.className} text-lg md:text-xl text-colors_default`
  const p = `${verdana.className} text-sm md:text-base text-colors_default`

  return <div className={`rounded-lg bg-block p-6`}>
    <h1 className={`${comfortaa.className} text-2xl md:text-3xl text-colors_default`}>FAQs</h1><br></br>
    <h2 className={h2}>How can I use the Harmoniser?</h2>
    <p className={p}>_</p><br></br>
    <h2 className={h2}>What kind of music do you have?</h2>
    <p className={p}>We currently have three visualisers with the themes soothing, upbeat and calming.</p><br></br>
    <h2 className={h2}>What is it meant for?</h2>
    <p className={p}>________</p><br></br>
  </div>

}