import Visualiser from "../ui/dashboard/render-visualiser";
import { comfortaa } from "../ui/fonts";

export default function Page() {
  const tempvis = Visualiser('hello');

  return <div className={`rounded-lg bg-colours-2 p-6`}>
  <h1 className={`${comfortaa.className} text-2xl md:text-3xl`}>Harmoniser</h1><br></br>
    {tempvis}
  </div>;
}