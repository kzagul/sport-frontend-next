import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui'
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from './Icons'

import { MorphingDialogBasic } from '@/features/product-card'

interface FeatureProps {
  icon: JSX.Element
  title: string
  description: string
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: 'Онлайн',
    description: 'Онлайн просмотр и поиск спортивных услуг и учреждений',
  },
  {
    icon: <MapIcon />,
    title: 'AI + Спорт',
    description:
      'Подбор услуг, занятий, учреждений и видов спорта с помощью умных рекомендаций на нейросетях',
  },
  {
    icon: <PlaneIcon />,
    title: 'Геймификация и интерактивность',
    description: 'Интерактивный подход в выборе, посмотрите на карте!',
  },
  {
    icon: <GiftIcon />,
    title: 'Централизованность',
    description: 'Пользователи, учреждения, тренера - все в одном месте',
  },
]

const cards = [
  {
    title: 'Онлайн',
    description: 'Онлайн просмотр и поиск спортивных услуг и учреждений',
    image: {
      src: 'https://avatars.mds.yandex.net/i?id=58d014271b1e99f9444554a8931bfaa1_l-6917174-images-thumbs&n=13',
    },
  },
  {
    title: 'AI + Спорт',
    description:
      'Подбор услуг, занятий, учреждений и видов спорта с помощью умных рекомендаций на нейросетях',
    image: {
      src: 'https://avatars.mds.yandex.net/i?id=58d014271b1e99f9444554a8931bfaa1_l-6917174-images-thumbs&n=13',
    },
  },
  {
    title: 'Геймификация и интерактивность',
    description: 'Интерактивный подход в выборе, посмотрите на карте!',
    image: {
      src: 'https://avatars.mds.yandex.net/i?id=58d014271b1e99f9444554a8931bfaa1_l-6917174-images-thumbs&n=13',
    },
  },
  {
    title: 'Централизованность',
    description: 'Пользователи, учреждения, тренера - все в одном месте',
    image: {
      src: 'https://avatars.mds.yandex.net/i?id=58d014271b1e99f9444554a8931bfaa1_l-6917174-images-thumbs&n=13',
    },
  },
]

export const HowItWorksBlock = () => {
  return (
    <section id="features" className="container py-24 text-center">
      <h2 className="text-3xl font-bold md:text-4xl">
        {/* How It{" "} */}
        <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
          {/* Works{" "} */}
          {/* Мы предлагаем уникальные возможности */}
          Уникальные возможности с нами
        </span>
        {/* Step-by-Step Guide */}
      </h2>
      <p className="mx-auto mb-8 mt-4 text-xl text-muted-foreground md:w-3/4">
        {/* То чего ранее не было на рынке спорта */}
      </p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            // className="bg-muted/50"
            className="rounded-xl"
          >
            <CardHeader>
              <CardTitle className="grid place-items-center gap-4">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>

      <section className="mx-auto grid grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <MorphingDialogBasic
            image={card.image}
            key={index}
            title={card.title}
            description={card.description}
          />
          // <span key={index}>{JSON.stringify(card)}</span>
        ))}
      </section>
    </section>
  )
}

// <MorphingDialogBasic />
// <MorphingDialogBasic />
// <MorphingDialogBasic />
// <MorphingDialogBasic />
// <MorphingDialogBasic />
