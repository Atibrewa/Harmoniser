import Link from 'next/link';
import VisualizerLinks from './visualizers-list';
import LogoDashboard from './logo-dashboard';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-center rounded-md bg-headerblock p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <LogoDashboard />
        </div>
      </Link>
      <div className="flex grow flex-col justify-between space-y-2 md:flex-col md:space-x-0 md:space-y-2">
        <VisualizerLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-block md:block"></div>
      </div>
    </div>
  );
}
