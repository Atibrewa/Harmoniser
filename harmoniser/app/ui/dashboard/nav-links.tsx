import {
  HomeIcon,
  QuestionMarkCircleIcon,
  CogIcon,
  BookOpenIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'About Us',
    href: '/dashboard/aboutus',
    icon: QuestionMarkCircleIcon,
  },
  { name: 'Settings', href: '/dashboard/settings', icon: CogIcon },
  { name: 'Credits', href: '/dashboard/credits', icon: BookOpenIcon },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className="flex !mt-0 h-[48px] grow text-colors_default items-center justify-center gap-2 rounded-md bg-block p-3 text-sm font-medium hover:bg-headerblock hover:text-colours-5 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
