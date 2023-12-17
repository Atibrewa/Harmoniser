import { Metadata } from 'next';
import Page from './page';
 
// Title will show up as 'Settings | Harmoniser'
export const metadata: Metadata = {
  title: 'Settings',
};

/**
 * This page is implemented with a layout because the page itself has client side components
 * Because of this, the metadata cannot be added to the page directly, this is a workaround
 */
export default Page;