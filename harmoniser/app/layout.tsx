import { Metadata } from 'next';
import '@/app/ui/global.css';

// This metadata will apply to the entire app!
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

/**
 * Sets up the app with an html document :)
 * This layout applies to every folder within the app, including dashboard and all its subfolders
 */
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
