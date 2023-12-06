import { comfortaa, verdana, verdana_italic } from "@/app/ui/fonts";

export default function Page() {
  const h2 = `${verdana_italic.className} text-lg md:text-xl`
  const p = `${verdana.className} text-sm md:text-base`

  return <div className={`rounded-lg bg-colours-2 p-6`}>
  <h1 className={`${comfortaa.className} text-2xl md:text-3xl`}>Settings</h1><br></br>
  <h2 className={h2}>Hi there! We're working on adding a colour blind mode and other fun settings soon! Hang tight :)</h2>
  </div>

}