'use client'

import { useEffect, useState } from 'react'
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/shared/ui/navigation-menu'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/shared/ui/sheet'

import { buttonVariants } from '@/shared/ui/button'
import { Menu } from 'lucide-react'
import { Badge } from '@/shared/ui/badge'
// import { ModeToggle } from "./mode-toggle";
// import { LogoIcon } from "./Icons";

interface RouteProps {
  href: string
  label: string
}

const routeList: RouteProps[] = [
  {
    href: '#features',
    label: 'Возможности',
  },
  {
    href: '#about',
    label: 'О проекте',
  },
  {
    href: '#recommendations',
    label: 'Рекомендации',
  },
  {
    href: '#ui',
    label: 'Внешний вид',
  },
  {
    href: '#roadmap',
    label: 'Дорожная карта',
  },
  {
    href: '#faq',
    label: 'Вопрос-ответ',
  },
]

export const LandingHeaderBlock = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const [sectionId, setSectionId] = useState(null)
  const [scrollPercentage, setScrollPercentage] = useState(0)

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const documentHeight =
      document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrollProgress = (scrollTop / documentHeight) * 100
    setScrollPercentage(scrollProgress)
  }

  useEffect(() => {
    const handleScroll = () => {
      const id = window.location.hash.slice(1) // Извлекаем id из URL
      if (id === sectionId) {
        window.scrollTo({ top: document.getElementById(id).offsetTop, behavior: 'smooth' })
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionId])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className="sticky top-0 z-40 w-full border-b-[1px] bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container flex h-14 w-screen justify-between px-4">
          <NavigationMenuItem className="flex font-bold">
            <a rel="noreferrer noopener" href="/" className="ml-2 flex text-xl font-bold">
              {/* <LogoIcon /> */}
              {/* <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text text-center">
                СПОРТ/услуги
              </span> */}
              <img
                className="h-10 w-full rounded-lg"
                src="logo/logo-full.png"
                alt="office content 1"
              />
            </a>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            {/* <ModeToggle /> */}

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu className="flex h-5 w-5 md:hidden" onClick={() => setIsOpen(true)}>
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={'left'}>
                <SheetHeader>
                  <SheetTitle className="text-xl font-bold">
                    <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-center text-transparent">
                      СПОРТ/услуги
                    </span>
                  </SheetTitle>
                </SheetHeader>
                <nav className="mt-4 flex flex-col items-center justify-center gap-2">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: 'ghost' })}
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden gap-2 md:flex">
            {routeList.map((route: RouteProps, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                // className={`text-[17px] ${buttonVariants({
                //   variant: "ghost",
                // })}`}
              >
                <Badge key={i} variant="outline">
                  {' '}
                  {route.label}
                </Badge>
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
        style={{ width: `${scrollPercentage}%`, height: '4px' }}
        className="w-full bg-primary transition-all duration-100"
      ></div>
    </header>
  )
}
