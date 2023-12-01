import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { verdana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${verdana.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[30px]">Harmoniser</p>
    </div>
  );
}
