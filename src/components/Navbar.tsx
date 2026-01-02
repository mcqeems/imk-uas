import type { MouseEvent } from 'react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu as MenuIcon, X as CloseIcon } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { cn } from '@/lib/utils';

interface MenuList {
  name: string;
  link: string;
}

function Navbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);

  const menuList: MenuList[] = [
    {
      name: 'Profil',
      link: '/profil',
    },
    {
      name: 'Program',
      link: '/program',
    },
    {
      name: 'Cerita Inspirasi',
      link: 'cerita-inspirasi',
    },
    {
      name: 'Mitra',
      link: '/mitra',
    },
  ];

  const handleNavigate = (to: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    navigate(to);
  };

  const handleNavigateMenu = (to: string) => () => navigate(to);

  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={cn(
        'fixed inset-x-0 top-0 z-50 w-full bg-background transition-all duration-200',
        isHome ? (scrolled ? 'backdrop:blur-2xl' : 'bg-transparent') : 'translate-y-0 opacity-100'
      )}
    >
      <div
        className={cn(
          'mx-auto flex items-center justify-between py-3 transition-all ease-out duration-300',
          isHome ? (scrolled ? 'px-3 max-w-6xl' : 'max-w-full px-10') : 'px-3 max-w-6xl'
        )}
      >
        <a href="/" onClick={handleNavigate('/')}>
          <div className={cn('w-auto shrink-0', isHome ? (scrolled ? 'h-12' : 'h-8') : 'h-8')}>
            <img className="h-full w-full object-contain" src="/logo-full.png" alt="Logo" />
          </div>
        </a>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {menuList.map((menu, index) => {
              return (
                <NavigationMenuItem key={menu.link || index}>
                  <NavigationMenuLink
                    href={menu.link}
                    onClick={handleNavigate(menu.link)}
                    className={cn(
                      'hover:bg-transparent hover:text-chart-1 focus:bg-transparent text-sm',
                      isHome ? (scrolled ? 'text-primary text-lg' : 'text-background') : 'text-primary text-lg'
                    )}
                  >
                    {menu.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="md:hidden">
          <AlertDialog>
            <AlertDialogTrigger
              aria-label="Open menu"
              className={cn(isHome ? (scrolled ? 'text-primary' : 'text-background') : 'text-primary')}
            >
              <MenuIcon className="size-5" aria-hidden="true" />
            </AlertDialogTrigger>

            <AlertDialogContent
              className={cn(
                'flex flex-col top-0 right-0 bottom-0 left-auto h-dvh w-72 max-w-[85vw] translate-x-0 translate-y-0 rounded-none p-0',
                'data-open:slide-in-from-right data-closed:slide-out-to-right data-open:zoom-in-100 data-closed:zoom-out-100'
              )}
            >
              <div className="flex justify-between border-b border-border px-4 py-6">
                <div className="text-xl font-bold">Menu</div>
                <AlertDialogCancel variant="ghost" size="icon" aria-label="Close menu">
                  <CloseIcon className="size-5" aria-hidden="true" />
                </AlertDialogCancel>
              </div>

              <div className="flex flex-col gap-1 p-2">
                {menuList.map((menu, index) => {
                  return (
                    <AlertDialogCancel
                      variant="ghost"
                      className={cn(
                        'h-10 justify-start px-3 text-base',
                        isHome ? (scrolled ? 'text-primary' : 'text-foreground') : 'text-primary'
                      )}
                      onClick={handleNavigateMenu(menu.link)}
                      key={menu.link || index}
                    >
                      {menu.name}
                    </AlertDialogCancel>
                  );
                })}
              </div>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
