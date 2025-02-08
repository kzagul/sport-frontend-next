import { InView } from '@/shared/ui/in-view'
import { motion } from 'motion/react'

export const UserInterfaceBlock = () => {
  return (
    // <section id="ui" className="container py-24 sm:py-32">
    //   <div className="mt-8 grid grid-cols-1 gap-4">
    //     <img
    //       className="sticky top-0 w-full rounded-lg object-contain"
    //       src="landing/design-app.png"
    //       alt="office content 1"
    //     />
    //   </div>
    // </section>

    <section id="ui" className="container w-full bg-white py-24 dark:bg-gray-900">
      <div className="mx-auto flex flex-col items-center gap-16">
        <div className="font-light text-gray-500 dark:text-gray-400 sm:text-lg">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
              Внешний вид
            </span>
          </h2>
          <InView
            viewOptions={{ once: true, margin: '0px 0px -250px 0px' }}
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.09,
                },
              },
            }}
          >
            <div className="columns-2 gap-4 px-8 sm:columns-3">
              {[
                '/landing/design/d1.svg',
                '/landing/design/d2.svg',
                '/landing/design/d6.svg',
                '/landing/design/d5.svg',
                '/landing/design/d7.svg',
                '/landing/design/d3.svg',
                '/landing/design/d4.svg',

                // '/landing/design/d8.svg',
                // 'https://images.beta.cosmos.so/e5ebb6f8-8202-40ec-bc70-976f81153501?format=jpeg',
                // 'https://images.beta.cosmos.so/1b6f1bee-1b4c-4035-9e93-c93ef4d445e1?format=jpeg',
                // 'https://images.beta.cosmos.so/9968a6cf-d7f6-4ec9-a56d-ac4eef3f8689?format=jpeg',
                // 'https://images.beta.cosmos.so/4b88a39c-c657-4911-b843-b473237e83b5?format=jpeg',
                // 'https://images.beta.cosmos.so/86af92c0-064d-4801-b7ed-232535b03328?format=jpeg',
                // 'https://images.beta.cosmos.so/399e2a4a-e118-4aaf-9c7e-155ed18f6556?format=jpeg',
                // 'https://images.beta.cosmos.so/6ff16bc9-dc94-4549-a057-673a603ce203?format=jpeg',
                // 'https://images.beta.cosmos.so/d67c3185-4480-4408-8f9d-1cbf541e5d91?format=jpeg',
                // 'https://images.beta.cosmos.so/a7b19274-3370-4080-b734-e8ac268d8c8e.?format=jpeg',
                // 'https://images.beta.cosmos.so/551daf0d-77e8-472c-9324-468fed15a0ba?format=jpeg',
              ].map((imgSrc, index) => {
                return (
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, scale: 0.8, filter: 'blur(10px)' },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        filter: 'blur(0px)',
                      },
                    }}
                    key={index}
                    className="mb-4"
                  >
                    <img
                      src={imgSrc}
                      alt={`Image placeholder from cosmos.so, index:${index}`}
                      className="size-full rounded-lg object-contain"
                    />
                  </motion.div>
                )
              })}
            </div>
          </InView>
        </div>
      </div>
    </section>
  )
}
