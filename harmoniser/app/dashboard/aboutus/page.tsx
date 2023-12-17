import { Metadata } from 'next';
import { comfortaa, verdana, verdana_italic } from "@/app/ui/fonts"

// Title will show up as 'About Us | Harmoniser'
export const metadata: Metadata = {
  title: 'About Us',
};

/**
 * This is a static page with information about us, the makers and the app!
 * @returns all info wrapped in a div element
 */
export default function Page() {
  // Declaring Tailwind styling needed for elements on this page as variables for easy use!
  const h2 = `${verdana_italic.className} text-lg md:text-xl text-colors_default`
  const p = `${verdana.className} text-sm md:text-base text-colors_default`

  return <div className={`rounded-lg bg-block p-6`}>
    <h1 className={`${comfortaa.className} text-2xl md:text-3xl text-colors_default`}>About Us</h1><br></br>
    <h2 className={h2}>Hello Listener!</h2><br></br>
    <h2 className={h2}>The Harmoniser was created by Aahanaa Tibrewal, Nina Lin, and Soulai Vang. </h2>
    <p className={p}>As part of our Internet Computing course, this project showcases what we have learned throughout this course along with our mutual interests in accessibility.</p><br></br>
    <h2 className={h2}>Purpose</h2>
    <p className={p}>For this project, we aim to create a centralized place for different atmospheric needs that focuses on accessibility. We have a upbeat visualizer that is perfect for studying, a lava lamp visualizer with soft music for calming down, peaceful music with leaves for relaxing, and a soothing rain visualizer for a peaceful time.</p><br></br>
  </div>

}