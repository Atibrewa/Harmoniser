import { comfortaa } from '@/app/ui/fonts';
import Image from 'next/image';

/**
 * Imports an image of the logo and configures it along with text to be used on the landing page.
 * It is adaptive to smaller screens and uses a smaller image and text size.
 */
export default function Logo() {
  return (
    <div
      className={`${comfortaa.className} flex flex-row items-center leading-none text-white`}
    >
      {/* 2 versions for different screen sizes :) */}
      <Image 
      src='/logo.png' 
      width={80}
      height={80}
      className='block md:hidden'
      alt={'Logo of website'} />

      <Image 
      src='/logo.png' 
      width={150}
      height={150}
      className='md:block hidden'
      alt={'Logo of website'} />

      {/* Formats text to be different sizes too, tailwind is great for this! */}
      <p className="text-[40px] md:text-[54px]">Harmoniser</p>
    </div>
  );
}