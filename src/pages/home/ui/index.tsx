import { QueryClient, dehydrate } from '@tanstack/react-query'
import { fetchPosts } from '../model';

import { Header } from '@/widgets/header'
import { Footer } from '@/widgets/footer'

import { Badge } from '@/shared/ui/badge';

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
  UserInterfaceBlock
} from '@/widgets/landing'
import Marquee from 'react-fast-marquee';

export const HomePage = () => {
  const soccerBall = String.fromCodePoint(0x26BD);

  return (
    <div className="mx-auto">
      {/* <Header /> */}
      <LandingHeaderBlock />
      <main className="flex mx-auto flex-col gap-4 row-start-2 items-center sm:items-start">
        <BeginBlock />

                
        <div className='flex mx-auto flex-col gap-4 max-w-[1400px]'>
          <HowItWorksBlock />
        </div>

        <div className='flex flex-col'>
          {/* <Marquee direction='right' pauseOnHover={true} speed={40} autoFill={true}>
            <div className='pr-32'>
              <div className="text-7xl animate-spin-slow">{soccerBall}</div>
            </div>
          </Marquee> */}
        
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
          {/* <Marquee pauseOnHover={true} speed={40} autoFill={true}>
            <img
              className="w-full rounded-lg"
              src="logo/logo-sport.svg"
              alt="office content 1"
            />
          </Marquee> */}
        </div>

        <div className='flex mx-auto flex-col gap-4 max-w-[1400px]'>
          <AboutBlock />
          <UserInterfaceBlock />
          {/* <ContactsBlock /> */}


          <CTABlock />

          <RoadmapBlock />

          <FAQBlock />
          <NewsletterBlock />
        </div>
      </main>
      <Footer />
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