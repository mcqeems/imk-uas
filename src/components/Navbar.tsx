import type { MouseEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

function Navbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleNavigate = (to: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    navigate(to);
  };

  return (
    <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
      <div className="font-semibold">Inspirasi Foundation</div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/"
              onClick={handleNavigate('/')}
              data-active={pathname === '/'}
              className={navigationMenuTriggerStyle()}
            >
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/example"
              onClick={handleNavigate('/example')}
              data-active={pathname === '/example'}
              className={navigationMenuTriggerStyle()}
            >
              Example
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default Navbar;
