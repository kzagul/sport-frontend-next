import { Button } from '@/shared/ui'

export const CTABlock = () => {
  return (
    <section id="cta" className="my-24 bg-muted/50 py-16 sm:my-32">
      <div className="container place-items-center lg:grid lg:grid-cols-2">
        <div className="lg:col-start-1">
          <h2 className="text-3xl font-bold md:text-4xl">
            Все твои
            <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
              {' '}
              спортивные активности
            </span>
            <div className="text-3xl font-bold md:text-4xl">в одном месте</div>
          </h2>
          <p className="mb-8 mt-4 text-xl text-muted-foreground lg:mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, beatae. Ipsa tempore
            ipsum iste quibusdam illum ducimus eos. Quasi, sed!
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <Button className="w-full md:mr-4 md:w-auto">Request a Demo</Button>
          <Button variant="outline" className="w-full md:w-auto">
            View all features
          </Button>
        </div>
      </div>
    </section>
  )
}
