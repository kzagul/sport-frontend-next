'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Input } from '@shadcn/ui'
import {
  mdiMagnify,
  mdiGestureTap,
  mdiMapMarkerRadius,
  mdiArrowBottomLeft,
  mdiArrowURightBottom,
  mdiAppleKeyboardControl,
} from '@mdi/js'

import { twMerge } from 'tailwind-merge'
import { cn } from '@/shared/utils/cn'

const Feature: React.FC<{ icon: string; title: React.ReactNode }> = ({ icon, title }) => (
  <div className="flex flex-row items-center justify-center gap-4">
    <div className="flex items-center justify-center">
      <svg
        className="h-8 w-8 text-gray-500 text-primary"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path d={icon} fill="currentColor" />
      </svg>
    </div>
    <div>
      <h3 className="mb-1 text-lg font-normal leading-tight text-gray-900 dark:text-white">
        {title}
      </h3>
    </div>
  </div>
)

export const Lights: React.FC<{ className?: React.ReactNode }> = ({ className }) => (
  <div className={cn('h-full w-full overflow-hidden', className)}>
    <div
      className={'relative bottom-[-200px] h-full w-full transition-all'}
      style={{
        background:
          'conic-gradient(from 180deg at 50% 50%,var(--purple-500) 0deg,var(--blue-700) 180deg,var(--blue-900) 1turn)',
        filter: 'blur(75px)',
        opacity: '20%',
      }}
    />
  </div>
)

export const BeginBlock2: React.FC = () => {
  return (
    <span className="block h-full w-full">
      {/* <div className={'bg-grid-white/[0.03] relative h-full w-full px-4'}> */}
      <div className={'relative h-full w-full px-4'}>
        <div
          className={
            'animate-moveUp relative z-[1] flex flex-col items-start justify-center sm:items-center'
          }
        >
          <div className="relative w-full">
            <div className="absolute -top-12 left-0 aspect-square overflow-hidden rounded-lg border p-1 sm:left-1/2 sm:-translate-x-1/2">
              <span className={twMerge('text-xl')}>
                <Link
                  href="https://t.me/+YZm33FyGrz4wZGMy"
                  className="mb-1 flex w-fit items-center justify-center rounded-full bg-gray-100 px-1 py-1 pr-4 text-sm text-gray-700 duration-500 hover:bg-gray-200 hover:transition-all dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                  target="_blank"
                >
                  <span className="mr-3 rounded-full bg-primary px-3 py-1 text-xs text-white">
                    Новое
                  </span>
                  <span className="font-regular text-sm">
                    Присоединяйтесь к сообществу в Telegram!
                  </span>
                  <svg
                    className="ml-2 h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </span>
            </div>
          </div>

          <div
            className={
              'bg-gradient-to-br from-white via-neutral-200 to-black/[0.6] bg-clip-text text-start text-4xl font-bold text-transparent sm:text-center sm:text-5xl'
            }
          >
            Good Hero Equals Trust.
          </div>
          <div className="text-start text-white/[0.7] sm:text-center">
            Trusted by Trusted Companies and Trusted People
          </div>
          <div className="mt-5 flex w-full justify-center gap-4 text-white max-sm:flex-col sm:gap-10">
            <button className="group flex h-10 w-full items-center justify-center gap-1.5 rounded-lg border border-green-900 bg-gradient-to-br from-green-950 to-blue-950 sm:h-8 sm:w-36">
              <span>Our Work</span>
              <span className="transition-all group-hover:translate-x-0.5">&rarr;</span>
            </button>
            <button className="flex h-8 items-center justify-center underline">
              <span>contact us</span>
            </button>
          </div>
        </div>
        <div className={'absolute bottom-0 left-0 z-0 h-full w-full animate-appear opacity-0'}>
          <Lights />
        </div>
      </div>
    </span>
  )
}

export const BeginBlock: React.FC = () => {
  return (
    // bg-gradient-to-b from-primary/5 to-primary/25
    <section className="h-screen w-full dark:bg-gray-900">
      <div className="mx-auto flex h-screen max-w-screen-xl flex-col justify-between px-4 py-8 lg:py-24">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="col-span-12 mx-auto justify-center text-center sm:mb-6 lg:mb-0 lg:text-left">
            <div className="flex justify-center">
              <Link
                href="https://t.me/+YZm33FyGrz4wZGMy"
                className="mb-1 flex w-fit items-center justify-center rounded-full bg-gray-100 px-1 py-1 pr-4 text-sm text-gray-700 duration-500 hover:bg-gray-200 hover:transition-all dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                target="_blank"
              >
                <span className="mr-3 rounded-full bg-primary px-3 py-1 text-xs text-white">
                  Новое
                </span>
                <span className="font-regular text-sm">
                  Присоединяйтесь к сообществу в Telegram!
                </span>
                <svg
                  className="ml-2 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>

            <div className="mx-auto mb-8 mt-8 grid grid-cols-1 gap-4">
              <img
                className="hidden w-full rounded-lg md:block"
                src="logo/logo-full.png"
                alt="office content 1"
              />
              <img
                className="block w-full rounded-lg md:hidden"
                src="logo/logo-sport.svg"
                alt="office content 1"
              />
            </div>
            {/* <h1 className="mx-auto mb-4 text-center text-3xl font-extrabold leading-none tracking-tight text-primary-600 md:text-5xl xl:text-6xl dark:text-white">
              Цифровая платформа для подбора и поиска спортивных услуг
              СПОРТ УСЛУГИ
            </h1> */}
            <h2 className="text-primary-600 mx-auto mb-4 bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-left text-5xl font-extrabold leading-none tracking-tight text-transparent dark:text-white md:text-center md:text-3xl xl:text-6xl">
              {/* Новый взгляд на индустрию спорта и спортивных услуг */}
              {/* Цифровая платформа для подбора и поиска спортивных услуг */}
              {/* Новое взгляд на индустрию спорта и спортивных услуг */}
              Новое видение индустрии спорта и спортивных услуг
            </h2>
          </div>
        </div>

        {/* <div className="flex justify-center gap-4 mt-8">
          <img
            className="w-3/12 rounded-lg"
            src="landing/pic.png"
            alt="office content 1"
          />
        </div> */}

        {/* <div className="grid gap-8 sm:gap-12 md:grid-cols-3">
          <Feature
            icon={mdiMagnify}
            title="Просмотр и поиск спортивных услуг и учреждений"
          />
          <Feature
            icon={mdiGestureTap}
            title={
              <>
                Подбор услуг с помощью умных рекомендаций{' '}
              </>
            }
          />
          <Feature
            icon={mdiMapMarkerRadius}
            title="Интерактивный подход в выборе, посмотрите на карте!"
          />
        </div> */}

        {/* <div className="flex justify-center gap-4 mt-8"> */}
        <a
          className="flex flex-row items-center justify-center gap-4"
          rel="noreferrer noopener"
          href={'#features'}
          key={1}
          // className={`text-[17px] ${buttonVariants({
          //   variant: "ghost",
          // })}`}
        >
          <div className="flex items-center justify-center rounded-full p-3 transition-all duration-300 hover:bg-white/30">
            <svg
              className="h-8 w-8 rotate-180 text-gray-500 text-primary"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path d={mdiAppleKeyboardControl} fill="currentColor" />
            </svg>
          </div>
        </a>
        {/* </div> */}
      </div>
      <div className={'absolute bottom-0 left-0 z-[-10] h-full w-full animate-appear opacity-0'}>
        <Lights />
      </div>
    </section>
  )
}
