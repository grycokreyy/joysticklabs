"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  return (
    <header
      className={
        "container py-6 hidden lg:h-stack items-center justify-between"
      }
    >
      <Link href={"/"}>
        <Image
          src={"/logo.png"}
          alt={"joystick labs"}
          width={150}
          height={50}
        />
      </Link>

      <nav>
        <ul className={"h-stack space-x-10 items-center font-semibold"}>
          <li>
            <Link
              className={"hover:text-primary transition-colors"}
              title={"Joystick Labs"}
              href={"#home"}
            >
              Home
            </Link>
          </li>

          <li>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={"bg-transparent font-semibold text-md"}
                  >
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className={"p-3 bg-gray-200"}>
                    <ul className={"v-stack space-y-3 font-semibold text-sm"}>
                      <li>
                        <NavigationMenuLink
                          href={"/whitepaper.pdf"}
                          target={"_blank"}
                          className={"hover:cursor-pointer"}
                        >
                          White Paper
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </li>

          <li>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={"bg-transparent font-semibold text-md"}
                  >
                    About Us
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className={"p-3 bg-gray-200"}>
                    <ul className={"v-stack space-y-3 font-semibold text-sm"}>
                      <li>
                        <NavigationMenuLink
                          href={"#mission"}
                          className={"hover:cursor-pointer"}
                        >
                          Our Mission
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </li>

          <li>
            <Link
              className={"hover:text-primary transition-colors"}
              href={"#products"}
            >
              Our Products
            </Link>
          </li>

          <li>
            <Link
              className={"hover:text-primary transition-colors"}
              href={"#roadmap"}
            >
              Roadmap
            </Link>
          </li>
        </ul>
      </nav>

      <Link href={"#launch"}>
        <Button>Launch App</Button>
      </Link>
    </header>
  );
};

export default Header;
