import { comfortaa } from '@/app/ui/fonts';
import Image from 'next/image';

/**
 * This is a version of the logo configured for the dashboard and login/signup forms.
 * It is adaptive to smaller screens and uses a smaller image and text size.
 * @returns The logo and text formatted for the dashboard
 */
export default function LogoDashboard() {
  return (
    <div
      className={`${comfortaa.className} flex flex-col justify-center items-center leading-none text-white`}
    >
      {/* versions for different screen sizes */}
      <Image 
      src='/logo.png' 
      width={50}
      height={50}
      className='block md:hidden'
      alt={'Logo of website'} />

      <Image 
      src='/logo.png' 
      width={125}
      height={125}
      className='md:block hidden'
      alt={'Logo of website'} />

      <p className="text-[18px] md:text-[30px]">Harmoniser</p>
    </div>
  );
}