import { comfortaa } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Logo() {
  return (
    <div
      className={`${comfortaa.className} flex flex-row items-center leading-none text-white`}
    >
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

      <p className="text-[54px]">Harmoniser</p>
    </div>
  );
}