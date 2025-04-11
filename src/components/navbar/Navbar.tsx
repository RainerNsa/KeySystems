import React from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "@/constants/navLinks";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import logo from "@/assets/KeySystem.webp";
import phoneIcon from "@/assets/icons/phone.webp";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#05071E] to-[#000080] text-[22px] font-normal shadow-sm text-[#CFCFCF]">
      <div className="container mx-auto flex items-center justify-between  py-[10px]" aria-label="Main navigation">
        {/* Logo */}
        <a className="flex items-center gap-2" aria-label="Go to homepage">
          <img src={logo} alt="KeySystem Logo" className="h-[50.04px]" />
        </a>

        {/* Desktop Navigation */}
        <NavigationMenu>
          <NavigationMenuList className="hidden md:flex gap-[28.27px]">
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.name}>
                {link.children ? (
                  <>
                    <NavigationMenuTrigger className="bg-transparent font-normal" aria-haspopup="true" aria-expanded="false">
                      {link.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[300px] gap-3 p-4">
                        {link.children.map((child) => (
                          <ListItem
                            key={child.name}
                            title={child.name}
                            href={child.href}
                          >
                            Explore {child.name}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      cn(
                        navigationMenuTriggerStyle(),
                        isActive
                          ? ""
                          : ""
                      )
                    }
                  >
                    {link.name}
                  </NavLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Call Button */}
        <a
          href="tel:+2348184441404"
          className="hidden md:flex justify-center items-center gap-[6.78px] rounded-full bg-gradient-to-r from-[#000080] via-[#4169E1] to-[#000080] px-[27.1px] py-[12.2px] border-[1.36px] border-[#4169E1] text-[16.26px] font-bold text-white shadow hover:bg-gradient-to-r transition" aria-label="Call KeySystem on +234 818 444 1404"
        >
          <img src={phoneIcon} alt="phone icon" className="w-4 h-4" />
          <span>+234 818 444 1404</span>
        </a>
        {/* Mobile Menu Trigger */}
        <MobileNavbar navLinks={navLinks} />
      </div>
    </header>
  );
};

export default Navbar;

// ListItem component

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          {children && (
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          )}
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
