"use client"

import { QueryClient, dehydrate } from '@tanstack/react-query'
import { fetchPosts } from '../model';

import { 
  BeginBlock,
  BeginBlock2,

  AboutBlock,
  ContactsBlock,
  FAQBlock,
  CTABlock,
  HowItWorksBlock,
  NewsletterBlock,
  LandingHeaderBlock,
  RoadmapBlock,
  UserInterfaceBlock,
  FooterBlock,
  RecommendationsBlock,
  ScrollToTopBlock,
  ProspectsBlock
} from '@/widgets/landing'
import Marquee from 'react-fast-marquee';
import { TextLoop } from '@/shared/ui/text-loop';
import { TextEffectPerChar } from '@/shared/ui/animations';
import { InView } from '@/shared/ui/in-view';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { ContainerScroll } from '@/shared/ui/container-scroll-animation';


export const LandingPage = () => {

  // const router = useRouter();

  // useEffect(() => {
  //   if (typeof window === "undefined") return;

  //   const sections = document.querySelectorAll("section");
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           // Используем replace вместо push
  //           router.replace(`#${entry.target.id}`);
  //         }
  //       });
  //     },
  //     { threshold: 0.5 }
  //   );

  //   sections.forEach((section) => observer.observe(section));

  //   return () => observer.disconnect();
  // }, [router]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            // Обновляем URL вручную без перехода
            window.history.replaceState(null, "", `#${id}`);
          }
        });
      },
      { threshold: 0.5 } // Секция должна быть наполовину видимой
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
  
  return (
    <div className="mx-auto">
      <LandingHeaderBlock />
      <main className="flex mx-auto flex-col gap-4 row-start-2 items-center sm:items-start">
        {/* <BeginBlock /> */}
        <div className="block h-screen w-full"> <BeginBlock /></div>
        
                
        <div className='flex mx-auto flex-col gap-4 max-w-[1400px]'>
          <HowItWorksBlock />

          <AboutBlock />

          {/* <span className='flex flex-row justify-start'>
            <h2 className="text-primary-600 mx-auto mb-4 bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-center text-2xl font-extrabold leading-none tracking-tight text-transparent dark:text-white md:text-3xl xl:text-6xl">
              Платформа для
            </h2>
            <TextLoop className='text-center text-2xl text-primary-600 font-extrabold leading-none tracking-tight dark:text-white md:text-3xl xl:text-6xl' children={['Вас', 'учреждений', 'фитнес-клубов', 'спортсменов', 'тренеров']} />
          </span> */}
        </div>

        

        <div className='flex flex-col'>
          <Marquee pauseOnHover={true} speed={40} autoFill={true}>
            <img
              className="w-full rounded-lg"
              src="logo/logo-sport.svg"
              alt="office content 1"
            />
            
          </Marquee>
          <Marquee pauseOnHover={true} speed={40} direction='right' autoFill={true}>
            <img
              className="w-full rounded-lg"
              src="logo/logo-sport.svg"
              alt="office content 1"
            />
          </Marquee>
        </div>

        <div className='flex mx-auto flex-col gap-4 max-w-[1400px]'>
          {/* <RecommendationsBlock /> */}

          {/* <UserInterfaceBlock /> */}
  

          {/* <ContactsBlock /> */}

          <div className="flex flex-col overflow-hidden">
            <ContainerScroll
              titleComponent={
                <>
                  {/* <h1 className="text-4xl font-semibold text-black dark:text-white">
                    Unleash the power of <br />
                    <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                      Scroll Animations
                    </span>
                  </h1> */}
                  <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                    <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent md:text-[4rem]">
                      Внешний вид
                    </span>
                  </h2>
                </>
              }
            >
              <img
                src="landing/design-full2.svg"
                alt="hero"
                height={720}
                width={1000}
                className="mx-auto rounded-2xl object-cover h-full object-left-top"
                draggable={false}
              />
            </ContainerScroll>
          </div>

          <CTABlock />

          <RoadmapBlock />

          <ProspectsBlock />

          <FAQBlock />

          <NewsletterBlock />

          {/* <ScrollToTopBlock /> */}
        </div>
      </main>

      <FooterBlock />
    </div>
  );
}


export async function getStaticProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['posts', 10],
    queryFn: () => fetchPosts(10),
  })

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

