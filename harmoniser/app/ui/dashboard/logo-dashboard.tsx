import { comfortaa } from '@/app/ui/fonts';
import Image from 'next/image';

export default function LogoDashboard() {
  return (
    <div
      className={`${comfortaa.className} flex flex-col justify-center items-center leading-none text-white`}
    >
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

      <p className="md:block hidden text-[30px]">Harmoniser</p>
      <p className="md:hidden block text-[18px]">Harmoniser</p>
    </div>
  );
}