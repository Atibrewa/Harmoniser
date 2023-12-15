import { Metadata } from 'next';
import { comfortaa, verdana, verdana_italic } from "@/app/ui/fonts"

// Title will show up as 'Credits | Harmoniser'
export const metadata: Metadata = {
  title: 'Credits',
};

// Credits is a static page with information and links to artists' pages, returns all info and links wrapped in a div element
export default function Page() {
  // Declaring Tailwind styling needed for elements on this page as variables for easy use!
  const h2 = `${verdana_italic.className} text-lg md:text-xl`
  const p = `${verdana.className} text-sm md:text-base`

  return <div className={`rounded-lg bg-block p-6 text-colors_default`}>
    <h1 className={`${comfortaa.className} text-2xl md:text-3xl`}>Credits</h1><br></br>
    <p className={p}>The audio and video we have used come from many different artists who we appreciate a lot for their work and for making it free to use! Their names link to their work, we hope you check them out :)</p><br></br>

    <h2 className={h2}>Calming Lava</h2>
    <p className={p}>Audio: Gymnopedies, Satie</p>
    <p className={p}>Video Clips: <a href='https://www.pexels.com/@inspiredimages/'>Anthony 🙂</a></p><br></br>

    <h2 className={h2}>Peaceful Leaves</h2>
    <p className={p}>Audio: Reverie, Debussy</p>
    <p className={p}>Video Clips: <a href='https://www.pexels.com/video/early-morning-sunlight-through-the-leaves-2840959/'>lam loi</a>, <a href='https://www.pexels.com/@enginakyurt/'>Engin Akyurt</a>, <a href='https://www.pexels.com/@photosbycollis/'>Collis</a></p><br></br>

    <h2 className={h2}>Soothing Rain</h2>
    <p className={p}>Audio: Nocturne in E flat major, Chopin</p>
    <p className={p}>Video Clips: <a href='https://www.pexels.com/@fotios-photos/'>Lisa Fotios</a></p><br></br>

    <h2 className={h2}>Upbeat Study</h2>
    <p className={p}>Audio: La vita è bella, Nicola Piovani</p>
    <p className={p}>Video Clips: <a href='https://www.pexels.com/@mart-production/'>MART PRODUCTION</a>, <a href='https://www.pexels.com/@enginakyurt/'>Engin Akyurt</a>, <a href='https://www.pexels.com/@techcrazebk/'>Bakkaprabhu Uppar</a>, <a href='https://www.pexels.com/@stefwithanf-1955763/'>StefWithAnF</a>, <a href='https://www.pexels.com/@padrinan/'>Miguel Á. Padriñán</a>, <a href='ttps://www.pexels.com/@paduret/'>Dan Cristian Pădureț</a></p><br></br>

  </div>

}