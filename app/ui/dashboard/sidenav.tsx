import Link from 'next/link';
import { IoLogOutOutline, IoSettingsOutline } from 'react-icons/io5';
import { signOut } from '@/auth';
import { Button } from '../button';
import NavLinks from './nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div className="h-full border-r p-2">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex items-center justify-center border-b lg:h-14">
          <Link href="/" className="flex items-center">
            Dashboard
          </Link>
        </div>
        <NavLinks />
        <nav className="mt-auto flex justify-center gap-4 px-2 sm:py-4">
          <form
            action={async () => {
              'use server';
              await signOut();
            }}
            className="w-full"
          >
            <Button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium text-slate-800 hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
              <PowerIcon className="w-6" />
              <div className="hidden md:block">Sign Out</div>
            </Button>
          </form>
        </nav>
      </div>
    </div>
  );
}
