export const FooterBlock = () => {
  return (
    <footer id="footer">
      <hr className="mx-auto w-11/12" />

      <section className="container flex flex-col justify-center gap-x-12 gap-y-8 py-20 md:flex-row md:justify-between">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="ml-2 flex w-full justify-center text-xl font-bold"
          >
            <img
              className="h-10 w-fit rounded-lg md:w-full"
              src="logo/logo-full.png"
              alt="office content 1"
            />
          </a>
        </div>

        <h3 className="flex w-full flex-col justify-center gap-x-4 md:w-fit md:flex-row md:justify-between">
          <span className="mx-auto w-fit md:mx-0">&copy; 2024 - все права защищены. </span>
          <a
            href="mailto:sportuslugi.tech@ya.ru"
            className="mx-auto w-fit border-primary text-primary transition-all hover:border-b-2 md:mx-0"
          >
            sportuslugi.tech@ya.ru
          </a>
        </h3>
      </section>
    </footer>
  )
}
