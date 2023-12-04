import Logo from '@/app/ui/logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { verdana, verdana_bold } from './ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-30 shrink-0 items-end rounded-lg bg-colours-1 p-4 md:h-52">
        <Logo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-colours-2 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`${verdana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <span className={`${verdana_bold.className}`}>Welcome to Harmoniser.</span> A place to sleep, relax, focus, and let all of your stress melt away.
          </p>
          <div className="flex gap-6">
            <div className = "flex flex-col justify-center gap-6">
              <h1 className = {`${verdana.className} text-xl`}>Returning User?</h1>
              <Link
                href="/login"
                className="flex items-center gap-5 self-start rounded-lg bg-colours-5 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-colours-4 md:text-base"
              >
              <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
              </Link>
            </div>
            <div className="flex flex-col justify-center gap-6">
              <h1 className = {`${verdana.className} text-xl`}>New Here?</h1>
              <Link
                href="/signup"
                className="flex items-center gap-5 self-start rounded-lg bg-colours-5 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-colours-4 md:text-base"
              >
                <span>Sign Up</span> <ArrowRightIcon className="w-5 md:w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image 
            src="/landing_desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="A graphic of a woman listening to music ina yoga pose, desktop version"
          />
          <Image 
            src="/landing_mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="A graphic of a woman listening to music ina yoga pose, mobile version"
          />
        </div>
      </div>
    </main>
  );
}