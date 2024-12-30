import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui'
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from './Icons'

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

export const HowItWorksBlock = () => {
  return (
    <section id="features" className="container py-24 text-center">
      <h2 className="text-3xl font-bold md:text-4xl">
        {/* How It{" "} */}
        <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
          {/* Works{" "} */}
          Мы предлагаем уникальные возможности
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
    </section>
  )
}
