import { comfortaa, verdana, verdana_italic } from "@/app/ui/fonts"

export default function Page() {
  const h2 = `${verdana_italic.className} text-lg md:text-xl`
  const p = `${verdana.className} text-sm md:text-base`

  return <div className={`rounded-lg bg-colours-2 p-6`}>
    <h1 className={`${comfortaa.className} text-2xl md:text-3xl`}>FAQs</h1><br></br>
    <h2 className={h2}>How can I use the Harmoniser?</h2>
    <p className={p}>_</p><br></br>
    <h2 className={h2}>What kind of music do you have?</h2>
    <p className={p}>We currently have three visualisers with the themes soothing, upbeat and calming.</p><br></br>
    <h2 className={h2}>What is it meant for?</h2>
    <p className={p}>________</p><br></br>
  </div>

}