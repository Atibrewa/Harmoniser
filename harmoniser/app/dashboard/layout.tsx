import SideNav from '@/app/ui/dashboard/sidenav';
import TopNav from '@/app/ui/dashboard/topnav';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <div className="flex bg-colours-3">
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
              <div className="w-full flex-none md:w-64">
                  <SideNav />
              </div>
      </div>
      <div className="flex flex-col flex-grow">
        <div className="flex flex-col justify-left h-20">
            <TopNav />
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      </div>
    </div>
    </>
  );
}