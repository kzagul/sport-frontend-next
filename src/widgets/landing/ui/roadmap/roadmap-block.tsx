const roadmapData = [
  {
    title: 'Q1 2025 — Запуск базовой платформы',
    description: [
      'Запуск лендинга о нашем продукте.',
      'Создание MVP (минимально жизнеспособного продукта): поиск спортивных услуг и учреждений.',
      'Разработка первой версии ИИ для персональных рекомендаций.',
      'Тестирование и сбор обратной связи от первых пользователей.',
      'Тестирование бизнес процессов и дизайн концепции продукта',
    ],
  },
  {
    title: 'Q2 2025 — Расширение функциональности',
    description: [
      'Добавление пользовательских профилей с трекером спортивных целей.',
      'Интеграция карты с отображением учреждений и маршрутов до них.',
      'Внедрение системы рейтингов и отзывов для учреждений и услуг.',
      'Рекламные кампании и продвижение продукта',
      'Расширение функционала, добавление модуля анализа данных для сбора статистики',
      'Реализация интеграций с GPT моделью',
    ],
  },
  {
    title: 'Q3 2025 — Подключение спортивных экспертов',
    description: [
      'Внедрение функции персональных тренировок через платформу.',
      'Добавление возможности видеоконсультаций с тренерами.',
      'Расширение базы данных по видам спорта и услугам.',
      'Оптимизация ИИ для более точных рекомендаций.',
    ],
  },
  {
    title: 'Q4 2025 — Подключение спортивных экспертов',
    description: [
      'Запуск системы чатов и форумов для общения пользователей.',
      'Введение дашбордов с аналитикой личного прогресса.',
      'Создание групповых спортивных мероприятий и тренировок.',
      'Интеграция с популярными спортивными гаджетами (умные часы, трекеры).',
    ],
  },
  {
    title: '2026',
    description: [
      'Стабильные продажи',
      'Расширение функциональной базы продукта',
      'Сотрудничество с крупными спортивными учреждениями, фитнес клубами',
      'Коллаборация с глобальными спортивными брендами и федерациями.',
    ],
  },
  {
    title: '2026',
    description: [
      'Разработка AR/VR-функциональности для виртуальных тренировок.',
      'Создание маркетплейса спортивного оборудования и одежды.',
      'Постоянное улучшение алгоритмов ИИ на основе данных пользователей.',
    ],
  },
]

export const RoadmapBlock = () => {
  return (
    <section id="roadmap" className="container py-24">
      <div className="items-left mx-auto flex flex-col gap-16">
        <div className="flex flex-col gap-12 font-light text-gray-500 dark:text-gray-400 sm:text-lg">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
              Дорожная карта
            </span>
          </h2>
          <ol className="relative border-s border-gray-200 dark:border-gray-700">
            {roadmapData.map((roadmapItem, index) => {
              return (
                <li className="mb-10 ms-6" key={index}>
                  <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
                    <svg
                      className="h-2.5 w-2.5 text-blue-800 dark:text-blue-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </span>
                  <h3 className="mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
                    {roadmapItem.title}
                    {/* Flowbite Application UI v2.0.0{' '} */}
                    {/* <span className="me-2 ms-3 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                      Latest
                    </span> */}
                  </h3>
                  {/* <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Released on January 13th, 2022
                  </time> */}
                  {roadmapItem.description.map((desc, index2) => {
                    return (
                      <p
                        className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
                        key={index2}
                      >
                        {desc}
                      </p>
                    )
                  })}
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
