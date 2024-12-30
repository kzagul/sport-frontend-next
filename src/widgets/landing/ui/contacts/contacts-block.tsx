import React from 'react'

export const ContactsBlock: React.FC = () => {
  return (
    <section className="w-full bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl items-center gap-16 px-4 py-8 lg:grid lg:grid-cols-2 lg:px-6 lg:py-16">
        <div className="font-light text-gray-500 dark:text-gray-400 sm:text-lg">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Контакты
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
