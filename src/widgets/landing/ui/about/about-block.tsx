import React from 'react';


export const AboutBlock: React.FC = () => {
  return (
    <section id="recommendations" className="w-full container py-24 sm:py-32 bg-white dark:bg-gray-900 ">
      <div className="flex flex-col gap-16 items-center mx-auto">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  О проекте
              </span>
          </h2>
          <p className="mb-4">
              We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.
          </p>
          <p>
              We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.
          </p>
          </div>

      </div>
  </section>
  );
};
