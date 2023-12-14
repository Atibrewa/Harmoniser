import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Search',
};

import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/invoices/table';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { comfortaa } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';

export default async function Page({
    searchParams,
  }: {
    searchParams?: {
      query?: string;
      page?: string;
    };
  }) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
   
    return (
      <div className="w-full">
        <div className="flex w-full items-center justify-between">
          <h1 className={`${comfortaa.className} text-2xl`}>Visualizers</h1>
        </div>
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
          <Search placeholder="Search visualizers..." />
        </div>
        {/* <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
          <Table query={query} currentPage={currentPage} />
        </Suspense> */}
        <div className="mt-5 flex w-full justify-center">
          {/* <Pagination totalPages={totalPages} /> */}
        </div>
      </div>
    );
  }