import { useState } from 'react'

export const ProspectsBlock = () => {
  const [prospects, setProspects] = useState({
    short: [
      {
        title: 'MVP',
        description: 'Реализация MVP Версии  и первый цикл тестирования',
      },
      {
        title: '+2',
        description: 'Добавление нескольких  ИИ сервисов на готовых LLM решениях',
      },
      {
        title: '> 1',
        description: 'Первое партнерство на региональном уровне и привлечение инвесторов',
      },
      {
        title: '500',
        description: 'Первых постоянных пользователей',
      },
    ],
    long: [
      {
        title: '89',
        description: 'Выйти на федеральный уровень',
      },
      {
        title: 'AI',
        description: 'Cоздать и обучить нейросеть для рекомендации',
      },
      {
        title: 'Гос',
        description: 'Привлечение гос структур ',
      },
      {
        title: '10 000',
        description: 'Постоянных клиентов сервиса',
      },
    ],
  })

  return (
    <section id="prospects" className="container w-full bg-white py-24 dark:bg-gray-900">
      <div className="mx-auto flex flex-col items-center gap-16">
        <div className="font-light text-gray-500 dark:text-gray-400 sm:text-lg">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
              Краткосрочные перспективы
            </span>
          </h2>

          <div className="mt-4 grid grid-cols-2 gap-4 md:mt-8 md:grid-cols-4 md:gap-8">
            {prospects.short.map((prospect, index) => {
              return (
                <div className="rounded-e-3xl rounded-t-3xl border border-gray-300 p-4" key={index}>
                  <h3>
                    <span className="text-4xl text-primary">{prospect.title}</span>
                  </h3>

                  <span className="text-xl">{prospect.description}</span>
                </div>
              )
            })}
          </div>

          <h2 className="mb-4 mt-16 text-3xl font-bold md:text-4xl">
            <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
              Долгосрочные перспективы
            </span>
          </h2>

          <div className="mt-4 grid grid-cols-2 gap-4 md:mt-8 md:grid-cols-4 md:gap-8">
            {prospects.long.map((prospect, index) => {
              return (
                <div className="rounded-e-3xl rounded-t-3xl border border-gray-300 p-4" key={index}>
                  <h3>
                    <span className="text-4xl text-primary">{prospect.title}</span>
                  </h3>

                  <span className="text-xl">{prospect.description}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
