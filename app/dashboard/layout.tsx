import SideNav from '@/app/ui/dashboard/sidenav';
import Navbar from '../ui/dashboard/navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid h-screen w-full overflow-hidden md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="bg-muted/40 hidden border-r md:block">
        <div className="hidden h-full max-h-screen flex-col gap-2 md:flex">
          <SideNav />
        </div>
      </div>
      <div className="flex h-full flex-1 flex-col gap-4 overflow-auto lg:gap-6">
        <div className="bg-slate-400">
          <Navbar />
        </div>
        <main className="p-4 lg:p-6">{children}</main>
      </div>
    </div>
  );
}
