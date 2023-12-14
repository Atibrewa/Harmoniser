import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: {
    template: '%s | Harmoniser',
    default: 'Harmoniser',
  },
  icons: {
    icon: '/favicon.ico',
  },
  description: 'An accessibility focused, web based visualiser to serve your listening needs',
};

import '@/app/ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
