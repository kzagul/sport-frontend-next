import { QueryClient, dehydrate } from '@tanstack/react-query'
import { fetchPosts } from '../model';

import { 
  BeginBlock,
  LandingHeaderBlock,
  FooterBlock,
} from '@/widgets/landing'

export const HomePage = () => {
  return (
    <div className="mx-auto">
      {/* <Header /> */}
      <LandingHeaderBlock />
      <main className="flex mx-auto flex-col gap-4 row-start-2 items-center sm:items-start">
        <BeginBlock />
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