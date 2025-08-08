import React from "react";
import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const socials = [
  {
    id: nanoid(),
    name: "twitter",
    link: "https://x.com/Joystick_labs",
    icon: "/twitter.png",
  },
  {
    id: nanoid(),
    name: "instagram",
    link: "https://www.instagram.com/joystick_labs/",
    icon: "/instagram.png",
  },
  {
    id: nanoid(),
    name: "linkedin",
    link: "https://www.linkedin.com/company/joysticklabs",
    icon: "/linkedin.png",
  },
  {
    id: nanoid(),
    name: "telegram",
    link: "https://t.me/joysticklabs1",
    icon: "/telegram.png",
  },
  {
    id: nanoid(),
    name: "discord",
    link: "https://discord.com/invite/Axttj38wTe",
    icon: "/discord.png",
  },
];

const Footer = () => {
  return (
    <footer
      className={
        "py-20 mt-44 bg-[#B5B5B5] border-t border-t-white rounded-t-3xl"
      }
    >
      <section className={"container text-[#1C1B1B] v-stack space-y-16"}>
        <section
          className={
            "v-stack lg:h-stack items-start lg:items-center justify-between space-y-10"
          }
        >
          <h1 className={"h1 text-3xl lg:text-5xl"}>GET INVOLVED :</h1>

          <div className={"grid grid-cols-5 lg:grid-cols-5 gap-5"}>
            {socials.map((d) => (
              <div
                key={d.id}
                className={
                  "bg-[#A2A2A2] rounded-full w-14 h-14 lg:w-16 lg:h-16 h-stack items-center justify-center border-t border-t-white"
                }
              >
                <Link href={d.link} target={"_blank"}>
                  <Image alt={d.name} src={d.icon} width={25} height={25} />
                </Link>
              </div>
            ))}
          </div>
        </section>

        <div
          className={
            "h-0.5 bg-gradient-to-r from-[#B4B4B4] from-20% via-white via-50% to-[#B4B4B4] to-80%"
          }
        ></div>

        <section className={"grid grid-cols-1 lg:grid-cols-3 gap-20"}>
          <section className={"v-stack space-y-8"}>
            <Image
              src={"/logo.png"}
              alt={"joystick labs"}
              width={150}
              height={50}
            />

            <span className={"font-semibold text-lg"}>
              Experience the new frontier of <br /> gaming, metaverse and
              awesome content
            </span>
          </section>

          <section className="v-stack space-y-5">
            <Link href={"#home"} className={"font-semibold text-lg"}>
              Home
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={"bg-transparent font-semibold text-md"}>
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className={"p-3 bg-gray-200"}>
                    <ul className={"v-stack space-y-3 font-semibold text-sm"}>
                      <li>
                        <NavigationMenuLink href={"/whitepaper.pdf"} target={"_blank"} className={"hover:cursor-pointer"}>
                          White Paper
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </section>

          <section className="v-stack space-y-5">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={"bg-transparent font-semibold text-md"}>
                    About Us
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className={"p-3 bg-gray-200"}>
                    <ul className={"v-stack space-y-3 font-semibold text-sm"}>
                      <li>
                        <NavigationMenuLink href={"#aboutus"} className={"hover:cursor-pointer"}>
                          Our Mission
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </section>

          <section className="v-stack space-y-5">
            <Link href={"#products"} className={"font-semibold text-lg"}>
              Our Products
            </Link>
            <Link href={"#roadmap"} className={"font-semibold text-lg"}>
              Roadmap
            </Link>
            <Link href={"#tokenomics"} className={"font-semibold text-lg"}>
              Tokenomics
            </Link>
          </section>
        </section>

        <div
          className={
            "h-0.5 bg-gradient-to-r from-[#B4B4B4] from-20% via-white via-50% to-[#B4B4B4] to-80%"
          }
        ></div>

        <section
          className={
            "v-stack lg:h-stack lg:items-center justify-between lg:text-lg text-gray-700 space-y-5 lg:space-y-0"
          }
        >
          <span>All rights reserved. Powered by Joystick Labs, 2025.</span>
          <div
            className={
              "v-stack lg:h-stack lg:items-center justify-between lg:space-x-10 space-y-5 lg:space-y-0"
            }
          >
            <Link href={"/whitepaper.pdf"}>Whitepaper</Link>
            <Link href={"https://x.com/Joystick_labs"}>Community</Link>
          </div>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
