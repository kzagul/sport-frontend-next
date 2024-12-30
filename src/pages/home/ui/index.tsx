import { QueryClient, dehydrate } from '@tanstack/react-query'
import { fetchPosts } from '../model';

import { 
  BeginBlock,
  LandingHeaderBlock,
  FooterBlock,
} from '@/widgets/landing'
import { MorphingDialogBasic } from '@/features/product-card';

export const HomePage = () => {
  return (
    <div className="mx-auto">
      <main className="flex mx-auto flex-col gap-4 row-start-2 items-center sm:items-start">


        <section className='grid grid-cols-4 gap-8 mx-auto'>
          <MorphingDialogBasic />
          <MorphingDialogBasic />
          <MorphingDialogBasic />
          <MorphingDialogBasic />
          <MorphingDialogBasic />
          <MorphingDialogBasic />
        </section>
        
      </main>
    </div>
  );
}
