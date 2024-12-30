import { QueryClient, dehydrate } from '@tanstack/react-query'
import { fetchPosts } from '../model';

import { 
  BeginBlock,
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
  ScrollToTopBlock
} from '@/widgets/landing'
import Marquee from 'react-fast-marquee';
import { TextLoop } from '@/shared/ui/text-loop';

export const LandingPage = () => {
  return (
    <div className="mx-auto">
      <LandingHeaderBlock />
      <main className="flex mx-auto flex-col gap-4 row-start-2 items-center sm:items-start">
        <BeginBlock />
                
        <div className='flex mx-auto flex-col gap-4 max-w-[1400px]'>
          <HowItWorksBlock />

          <AboutBlock />

          <span className='flex flex-row justify-start'>
            <h2 className="text-primary-600 mx-auto mb-4 bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-center text-2xl font-extrabold leading-none tracking-tight text-transparent dark:text-white md:text-3xl xl:text-6xl">
              Платформа для
            </h2>
            <TextLoop className='text-center text-2xl text-primary-600 font-extrabold leading-none tracking-tight dark:text-white md:text-3xl xl:text-6xl' children={['Вас', 'учреждений', 'фитнес-клубов', 'спортсменов', 'тренеров']} />
          </span>
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
          <RecommendationsBlock />

          <UserInterfaceBlock />

          {/* <ContactsBlock /> */}

          <CTABlock />

          <RoadmapBlock />

          <FAQBlock />

          <NewsletterBlock />

          <ScrollToTopBlock />
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

