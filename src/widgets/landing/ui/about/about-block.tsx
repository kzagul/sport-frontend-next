import React from 'react'

export const AboutBlock: React.FC = () => {
  return (
    <section id="about" className="container w-full bg-white py-24 dark:bg-gray-900 sm:py-32">
      <div className="mx-auto flex flex-col items-start gap-16">
        <div className="font-light text-gray-500 dark:text-gray-400 sm:text-lg">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
              О проекте
            </span>
          </h2>
          <p className="mb-4">
            Спорт услуги — это платформа для персонального подбора и простого поиска спортивных
            услуг и учреждений.
          </p>

          <p className="mb-4">Наша цель</p>
          <p>
            Предоставить удобный онлайн функционал, для людей, желающих заниматься спортом,
            спортсменов, тренеров и учреждений. Объединяем в одном централизованном месте. Подойти к
            процессу выбора  услуг учитывая индивидуальные запросы и интересы клиентов.
          </p>

          <p className="mb-4 mt-12">Для решения каких проблем</p>
          <div>сложность в выборе</div>
          <div>доступность и централизованность данных</div>
          <div>временные затраты</div>
          <div>взаимодействие клиента и учреждения</div>
          <div>индивидуальный подход</div>

          <p className="mb-4 mt-12">Преимущества</p>
          <div>Персонализация</div>
          <div>Экономия времени</div>
          <div>Аналитика / статистика</div>
          <div>ИИ</div>
          <div>Автоматизация бизнес процессов</div>
          <div>Интеграция с внешними сервисами</div>
        </div>
      </div>
    </section>
  )
}
