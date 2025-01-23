import React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { menu } from "@/data/menu";
// import { ModeToggler } from "@/components/ui/mode-toggler";

export default function HamburgerMenu() {
  return (
    <>
      <div className="md:hidden my-auto">
        <Sheet>
          <SheetTrigger>
            <Menu className="h-8 w-8 my-auto" />
            <span className="sr-only">Close</span>
          </SheetTrigger>
          <SheetTitle className="sr-only">Menu Button</SheetTitle>
          <SheetContent aria-describedby={undefined} className="w-full">
            {/* <ModeToggler /> */}

            <NavigationMenu className="flex flex-col justify-center items-center  my-20 mx-auto">
              <NavigationMenuList className=" flex-col gap-5 w-full">
                {menu.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <Link href={item.url} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                        title={item.text}
                      >
                        <SheetTrigger className="uppercase">
                          {item.text}
                        </SheetTrigger>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
