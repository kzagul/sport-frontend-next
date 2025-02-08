import { Button, Input } from '@/shared/ui'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/shared/ui/accordion'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/ui/dialog'
import { Label } from '@/shared/ui/label'
import { Textarea } from '@/shared/ui/textarea'

interface FAQProps {
  question: string
  answer: string
  value: string
}

const FAQList: FAQProps[] = [
  {
    question: 'Что такое платформа "Спортуслуги"?',
    answer:
      '"Спортуслуги" — это сервис, который помогает найти спортивные услуги, учреждения и мероприятия, а также подобрать персонализированные рекомендации с использованием искусственного интеллекта (ИИ).',
    value: 'item-1',
  },
  {
    question: 'Как работает подбор услуг с помощью ИИ?',
    answer:
      'Наш ИИ анализирует ваши предпочтения, цели и данные о выбранных услугах, чтобы предложить лучшие варианты. Чем больше вы используете платформу, тем точнее становятся рекомендации.',
    value: 'item-2',
  },
  {
    question: 'Какие виды спорта и услуг представлены?',
    answer:
      'На платформе вы найдете услуги и учреждения, связанные с фитнесом, йогой, плаванием, единоборствами, игровыми видами спорта, детскими спортивными секциями и многим другим.',
    value: 'item-3',
  },
  {
    question: 'Могу ли я фильтровать результаты по стоимости, расположению и рейтингу?',
    answer:
      'Да, у нас есть удобные фильтры, которые позволяют искать услуги по цене, местоположению, рейтингу, уровню подготовки и другим параметрам.',
    value: 'item-4',
  },
  {
    question: 'Как зарегистрироваться и начать пользоваться платформой?',
    answer:
      'Вы можете зарегистрироваться через электронную почту, номер телефона или социальные сети. После регистрации вы получите доступ к функциям платформы, включая рекомендации и личный кабинет.',
    value: 'item-5',
  },
  {
    question: 'Нужно ли платить за использование платформы?',
    answer:
      'Базовый доступ к платформе бесплатный. Некоторые премиум-функции, такие как персональные тренировки с экспертами или расширенные рекомендации, могут быть платными.',
    value: 'item-6',
  },
  {
    question: 'Как мне выбрать подходящее учреждение или услугу?',
    answer:
      'Мы предоставляем подробную информацию о каждом учреждении, включая отзывы других пользователей, фотографии, расписание и контактные данные. Вы также можете посмотреть на карте, где находится учреждение.',
    value: 'item-7',
  },
  {
    question: 'Как связаться с вами?',
    answer:
      'Если у вас возникли вопросы или проблемы, вы можете связаться с нашей службой поддержки через форму обратной связи, по электронной почте или через чат на платформе.',
    value: 'item-8',
  },
  {
    question: 'Есть ли мобильное приложение?',
    answer:
      'Да, мы предлагаем удобное мобильное приложение для iOS и Android, чтобы вы могли искать спортивные услуги и получать рекомендации в любом месте и в любое время.',
    value: 'item-9',
  },
  {
    question: 'Как платформа помогает мне достигать моих спортивных целей?',
    answer:
      '"Спортуслуги" не только подбирает услуги и учреждения, но и предоставляет аналитику и советы для достижения ваших целей. Вы можете отслеживать свой прогресс через личный кабинет, анализировать статистику и получать рекомендации по улучшению результатов.',
    value: 'item-10',
  },
]

export const FAQBlock = () => {
  return (
    <section id="faq" className="container py-24">
      <h2 className="mb-4 text-3xl font-bold md:text-4xl">
        Вопрос -{' '}
        <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
          ответ
        </span>
      </h2>

      <Accordion type="single" collapsible className="AccordionRoot w-full">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">{question}</AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="mt-4 font-medium">Имеются вопросы? </h3>
      <Dialog>
        <DialogTrigger asChild>
          <span className="cursor-pointer border-primary text-primary transition-all hover:border-b-2">
            Свяжитесь с нами
          </span>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Напишите письмо нам на почту</DialogTitle>
            <DialogDescription>Мы ответим вам в ближайщее время</DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <Textarea placeholder="Ваше сообщение" />
            </div>
            {/* <Button type="submit" size="sm" className="px-3">
                <span className="sr-only">Copy</span>
                <Copy />
              </Button> */}
          </div>
          <DialogFooter className="sm:justify-end">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Закрыть
              </Button>
            </DialogClose>
            <Button type="button" variant="default">
              Отправить
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  )
}
