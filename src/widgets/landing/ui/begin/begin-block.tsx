import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Input } from '@shadcn/ui';
import { mdiMagnify, mdiGestureTap, mdiMapMarkerRadius, mdiArrowBottomLeft, mdiArrowURightBottom, mdiAppleKeyboardControl } from '@mdi/js';

const Feature: React.FC<{ icon: string; title: React.ReactNode }> = ({ icon, title }) => (
  <div className="flex flex-row gap-4 justify-center items-center">
    <div className="flex justify-center items-center">
      <svg className="text-primary w-8 h-8 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
        <path d={icon} fill="currentColor" />
      </svg>
    </div>
    <div>
      <h3 className="mb-1 text-lg font-normal leading-tight text-gray-900 dark:text-white">{title}</h3>
    </div>
  </div>
);

export const BeginBlock: React.FC = () => {

  return (
    <section className="bg-gradient-to-b from-primary/5 to-primary/25 dark:bg-gray-900 w-full h-screen">
      <div className="flex flex-col justify-between h-full max-w-screen-xl px-4 py-8 mx-auto lg:py-24">
        <div className="grid items-center gap-8 lg:gap-12 lg:grid-cols-12">
          <div className="justify-center mx-auto col-span-12 text-center sm:mb-6 lg:text-left lg:mb-0">
 
            <div className='flex justify-center'>
              <Link
                href="https://t.me/+YZm33FyGrz4wZGMy"
                className="flex w-fit items-center justify-center px-1 py-1 pr-4 mb-1 text-sm text-gray-700 bg-gray-100 hover:transition-all duration-500 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                target='_blank'
              >
                <span className="px-3 py-1 mr-3 text-xs text-white rounded-full bg-primary">Новое</span>
                <span className="text-sm font-regular">Присоединяйтесь к сообществу в Telegram!</span>
                <svg
                  className="w-5 h-5 ml-2"
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
            

            <div className="grid grid-cols-1 gap-4 mt-8 mx-auto mb-8">
              <img
                className="w-full rounded-lg"
                src="logo/logo-full.png"
                alt="office content 1"
              />
            </div>
            {/* <h1 className="mx-auto mb-4 text-center text-3xl font-extrabold leading-none tracking-tight text-primary-600 md:text-5xl xl:text-6xl dark:text-white">
              Цифровая платформа для подбора и поиска спортивных услуг
              СПОРТ УСЛУГИ
            </h1> */}
            <h2 className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text text-center mx-auto mb-4 text-2xl font-extrabold leading-none tracking-tight text-primary-600 md:text-3xl xl:text-6xl dark:text-white">
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
          className="flex flex-row gap-4 justify-center items-center"
                rel="noreferrer noopener"
                href={'#features'}
                key={1}
                // className={`text-[17px] ${buttonVariants({
                //   variant: "ghost",
                // })}`}
              >

            <div className="flex justify-center items-center p-3 hover:bg-white/30 transition-all duration-300 rounded-full">
              <svg className="rotate-180 text-primary w-8 h-8 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <path d={mdiAppleKeyboardControl} fill="currentColor" />
              </svg>
            </div>
            
           </a>
        {/* </div> */}
      </div>
    </section>
  );
};
