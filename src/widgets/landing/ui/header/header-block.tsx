"use client"

import { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/shared/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/ui/sheet";

import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "@/shared/ui/button";
import { Menu } from "lucide-react";
import { Badge } from "@/shared/ui/badge";
// import { ModeToggle } from "./mode-toggle";
// import { LogoIcon } from "./Icons";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#features",
    label: "Возможности",
  },
  {
    href: "#about",
    label: "О проекте",
  },
  {
    href: "#ui",
    label: "Внешний вид",
  },
  {
    href: "#roadmap",
    label: "Дорожная карта",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
];

export const LandingHeaderBlock = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollProgress = (scrollTop / documentHeight) * 100;
    setScrollPercentage(scrollProgress);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <a
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-bold text-xl flex"
            >
              {/* <LogoIcon /> */}
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text text-center">
                СПОРТ/услуги
              </span>
            </a>
          </NavigationMenuItem>


          {/* mobile */}
          <span className="flex md:hidden">
            {/* <ModeToggle /> */}

            <Sheet
              open={isOpen}
              onOpenChange={setIsOpen}
            >
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                      <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text text-center">
                        СПОРТ/услуги
                      </span>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.map((route: RouteProps, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                // className={`text-[17px] ${buttonVariants({
                //   variant: "ghost",
                // })}`}
              >
                <Badge key={i} variant="outline"> {route.label}</Badge>
              </a>
            ))}
          </nav>
{/* 
          <div className="hidden md:flex gap-2">
            <a
              rel="noreferrer noopener"
              href="https://github.com/leoMirandaa/shadcn-landing-page.git"
              target="_blank"
              className={`border ${buttonVariants({ variant: "secondary" })}`}
            >
              Github
            </a>

            <ModeToggle />
          </div> */}
        </NavigationMenuList>
      </NavigationMenu>
      <div
        style={{ width: `${scrollPercentage}%`, height: '4px'}}
        className="bg-primary w-full transition-all duration-100"
      ></div>
    </header>
  );
};
