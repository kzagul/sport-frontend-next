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
    question: 'Is this template free?',
    answer: 'Yes. It is a free ChadcnUI template.',
    value: 'item-1',
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint labore quidem quam? Consectetur sapiente iste rerum reiciendis animi nihil nostrum sit quo, modi quod.',
    value: 'item-2',
  },
  {
    question: 'Lorem ipsum dolor sit amet  Consectetur natus dolores minus quibusdam?',
    answer:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore qui nostrum reiciendis veritatis necessitatibus maxime quis ipsa vitae cumque quo?',
    value: 'item-3',
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit?',
    answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    value: 'item-4',
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur natus?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint labore quidem quam? Consectetur sapiente iste rerum reiciendis animi nihil nostrum sit quo, modi quod.',
    value: 'item-5',
  },
]

export const FAQBlock = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
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
