import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { useState } from "react";

const navLinksData = [
  {
    id: 1,
    path: "/",
    label: "Home",
  },
  {
    id: 2,
    path: "/about",
    label: "About",
  },
  {
    id: 3,
    path: "/login",
    label: "Contact",
  },

];

const Navigation = ({
  className,
  flexCol,
}: {
  className?: string;
  flexCol?: boolean;
}) => {
  const [currentPath, setCurrentPath] = useState<string>(
    window.location.pathname
  );

  console.log(currentPath);
  return (
    <NavigationMenu
      className={cn("max-w-none justify-center px-6 hidden md:flex", className)}
    >
      <NavigationMenuList className={`text-gray-400  ${flexCol && "flex-col"}`}>
        {navLinksData.map((link) => (
          <NavigationMenuItem key={link.id}>
            <Link to={link.path} onClick={() => setCurrentPath(link.path)}>
              <NavigationMenuLink
                className={cn(
                  `${
                    currentPath === link.path && "text-primary "
                  }  hover:!text-primary`,
                  navigationMenuTriggerStyle()
                )}
              >
                {link.label}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;
