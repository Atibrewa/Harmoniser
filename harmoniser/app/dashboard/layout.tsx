import SideNav from '@/app/ui/dashboard/sidenav';
import TopNav from '@/app/ui/dashboard/topnav';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <div className="flex bg-background">
      <div className="flex h-screen flex-col md:flex-row">
              <div className="w-full flex-none md:w-64">
                  <SideNav />
              </div>
      </div>
      <div className="flex flex-col flex-grow">
        <div className="flex flex-col justify-left h-20">
            <TopNav />
        </div>
        <div className="flex-grow p-4 justify-center md:overflow-y-auto">{children}</div>
      </div>
    </div>
    </>
  );
}