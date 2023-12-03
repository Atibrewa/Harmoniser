import Link from 'next/link';
import VisualizerLinks from './visualizer-links';
import NavLinks from '@/app/ui/dashboard/nav-links';
import Logo from '@/app/ui/logo';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-colours-1 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <Logo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <VisualizerLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
      </div>
    </div>
  );
}
