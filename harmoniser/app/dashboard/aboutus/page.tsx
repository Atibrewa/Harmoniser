import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Help',
};

import { comfortaa, verdana, verdana_italic } from "@/app/ui/fonts"

export default function Page() {
  const h2 = `${verdana_italic.className} text-lg md:text-xl text-colors_default`
  const p = `${verdana.className} text-sm md:text-base text-colors_default`

  return <div className={`rounded-lg bg-block p-6`}>
    <h1 className={`${comfortaa.className} text-2xl md:text-3xl text-colors_default`}>About Us</h1><br></br>
    <h2 className={h2}>Hello Listener!</h2>
    <p className={p}>________</p><br></br>
    <h2 className={h2}>The Harmoniser is created by Aahanaa Tibrewal, Nina Lin, and Soulai Vang. </h2>
    <p className={p}>As part of our Internet Computing course, this project showcases what we have learned throughout this course along with our mutual interests in accessibility.</p><br></br>
    <h2 className={h2}>Purpose</h2>
    <p className={p}>For this project, we aim to create a centralized place for different atmospheric needs that focuses on accessibility. We have a upbeat visualizer that is perfect for studying, a lava lamp visualizer with soft music for calming down, peaceful music with leaves for relaxing, and a soothing rain visualizer for a peaceful time.</p><br></br>
    <p className={p}>________</p><br></br>
  </div>

}