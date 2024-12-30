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

export const BeginBlock: React.FC = () => {
  return (
    <section className="h-screen w-full bg-gradient-to-b from-primary/5 to-primary/25 dark:bg-gray-900">
      <div className="mx-auto flex h-full max-w-screen-xl flex-col justify-between px-4 py-8 lg:py-24">
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
              <img className="w-full rounded-lg" src="logo/logo-full.png" alt="office content 1" />
            </div>
            {/* <h1 className="mx-auto mb-4 text-center text-3xl font-extrabold leading-none tracking-tight text-primary-600 md:text-5xl xl:text-6xl dark:text-white">
              Цифровая платформа для подбора и поиска спортивных услуг
              СПОРТ УСЛУГИ
            </h1> */}
            <h2 className="text-primary-600 mx-auto mb-4 bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-center text-2xl font-extrabold leading-none tracking-tight text-transparent dark:text-white md:text-3xl xl:text-6xl">
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
    </section>
  )
}
