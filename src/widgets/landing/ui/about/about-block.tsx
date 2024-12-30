import React from 'react'

export const AboutBlock: React.FC = () => {
  return (
    <section
      id="recommendations"
      className="container w-full bg-white py-24 dark:bg-gray-900 sm:py-32"
    >
      <div className="mx-auto flex flex-col items-center gap-16">
        <div className="font-light text-gray-500 dark:text-gray-400 sm:text-lg">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
              О проекте
            </span>
          </h2>
          <p className="mb-4">
            We are strategists, designers and developers. Innovators and problem solvers. Small
            enough to be simple and quick, but big enough to deliver the scope you want at the pace
            you need. Small enough to be simple and quick, but big enough to deliver the scope you
            want at the pace you need.
          </p>
          <p>
            We are strategists, designers and developers. Innovators and problem solvers. Small
            enough to be simple and quick.
          </p>
        </div>
      </div>
    </section>
  )
}
