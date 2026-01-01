import type { MouseEvent } from 'react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

function Navbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);

  const handleNavigate = (to: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    navigate(to);
  };

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

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/profile"
                onClick={handleNavigate('/profile')}
                className={cn(
                  'hover:bg-transparent hover:text-chart-1 focus:bg-transparent text-sm',
                  isHome ? (scrolled ? 'text-primary text-lg' : 'text-background') : 'text-primary text-lg'
                )}
              >
                Profil
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/program"
                onClick={handleNavigate('/program')}
                className={cn(
                  'hover:bg-transparent hover:text-chart-1 focus:bg-transparent text-sm',
                  isHome ? (scrolled ? 'text-primary text-lg' : 'text-background') : 'text-primary text-lg'
                )}
              >
                Program
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/inspiration"
                onClick={handleNavigate('/inspiration')}
                className={cn(
                  'hover:bg-transparent hover:text-chart-1 focus:bg-transparent text-sm',
                  isHome ? (scrolled ? 'text-primary text-lg' : 'text-background') : 'text-primary text-lg'
                )}
              >
                Cerita Inspirasi
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/reference"
                onClick={handleNavigate('/reference')}
                className={cn(
                  'hover:bg-transparent hover:text-chart-1 focus:bg-transparent text-sm',
                  isHome ? (scrolled ? 'text-primary text-lg' : 'text-background') : 'text-primary text-lg'
                )}
              >
                Referensi
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}

export default Navbar;
