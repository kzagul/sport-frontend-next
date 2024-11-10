"use client"

import { Input, Button } from "@/shared/ui";


export const NewsletterBlock = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Subscribed!");
  };

  return (
    <section id="newsletter" className="w-full flex justify-center">
      {/* <hr className="mx-auto" /> */}

      <div className="mx-auto container w-full py-24 sm:py-32">
        <h3 className="text-center text-4xl md:text-5xl font-bold">
          Подпишитесь на нашу {" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            рассылку
          </span>
        </h3>
        <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
          {/* Lorem ipsum dolor sit amet consectetur. */}
        </p>

        <form
          className="flex flex-col w-full md:flex-row md:w-1/2 mx-auto gap-4 md:gap-2"
          onSubmit={handleSubmit}
        >
          <Input
            placeholder="Введите ваш Email"
            className="bg-muted/50 dark:bg-muted/80 "
            aria-label="email"
          />
          <Button>Подписаться</Button>
        </form>
      </div>

      {/* <hr className="w-11/12 mx-auto" /> */}
    </section>
  );
};
