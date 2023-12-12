import { comfortaa, verdana, verdana_italic } from "@/app/ui/fonts"

export default function Page() {
  const h2 = `${verdana_italic.className} text-lg md:text-xl`
  const p = `${verdana.className} text-sm md:text-base`

  return <div className={`rounded-lg bg-colours-2 p-6`}>
    <h1 className={`${comfortaa.className} text-2xl md:text-3xl`}>Credits</h1><br></br>
    <p className={p}>The audio and video we have used come from many different artists who we appreciate a lot for their work and for making it free to use! These are links to their work, we hope you check them out :)</p>

  </div>

}