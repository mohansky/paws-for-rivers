"use client";
import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { menu } from "@/data/menu"; 
// import { ModeToggler } from "@/components/ui/mode-toggler";

export default function Navbar() {
  return (
    <NavigationMenu className="my-2">
      <NavigationMenuList className="space-x-2">
        {menu.map((item, index) => (
          <NavigationMenuItem key={index}>
            <Link href={item.url} legacyBehavior passHref>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                title={item.text}
              >
                {item.text}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
        {/* <ModeToggler /> */}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
