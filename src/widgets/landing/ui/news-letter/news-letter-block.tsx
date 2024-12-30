'use client'

import { Input, Button } from '@/shared/ui'

export const NewsletterBlock = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log('Subscribed!')
  }

  return (
    <section id="newsletter" className="flex w-full justify-center">
      {/* <hr className="mx-auto" /> */}

      <div className="container mx-auto w-full py-24 sm:py-32">
        <h3 className="text-center text-4xl font-bold md:text-5xl">
          Подпишитесь на нашу{' '}
          <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
            рассылку
          </span>
        </h3>
        <p className="mb-8 mt-4 text-center text-xl text-muted-foreground">
          {/* Lorem ipsum dolor sit amet consectetur. */}
        </p>

        <form
          className="mx-auto flex w-full flex-col gap-4 md:w-1/2 md:flex-row md:gap-2"
          onSubmit={handleSubmit}
        >
          <Input
            placeholder="Введите ваш Email"
            className="bg-muted/50 dark:bg-muted/80"
            aria-label="email"
          />
          <Button>Подписаться</Button>
        </form>
      </div>

      {/* <hr className="w-11/12 mx-auto" /> */}
    </section>
  )
}
