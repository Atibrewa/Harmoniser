import { Metadata } from 'next';
import Search from '@/app/ui/search';
import { comfortaa } from '@/app/ui/fonts';

// Title will show up as 'Search | Harmoniser'
export const metadata: Metadata = {
  title: 'Search',
};

/**
 * An in progress search page, currently it displays a box that takes inputs but we're working on the rest!
 * It will be able to search by name or feature such as soothing, calming, upbeat etc!
 */
export default async function Page({
    searchParams,
  }: {
    searchParams?: {
      query?: string;
      page?: string;
    };
  }) {
    // Retrieveing the parameters and creating a url
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
   
    return (
      <div className="w-full">
        <div className="flex w-full items-center justify-between">
          <h1 className={`${comfortaa.className} text-2xl text-colors_default`}>Visualizers</h1>
        </div>
        <p className="p-5 pt-10 text-colors_default">
          The Search feature is currently a work-in-progress and does not work at the moment! Please wait!
        </p>
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
          <Search placeholder="Search visualizers..." />
        </div>
      </div>
    );
  }