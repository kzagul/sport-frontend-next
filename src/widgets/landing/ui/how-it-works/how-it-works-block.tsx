import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "./Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Онлайн",
    description:
      "Онлайн просмотр и поиск спортивных услуг и учреждений",
  },
  {
    icon: <MapIcon />,
    title: "AI + Спорт",
    description:
      "Подбор услуг, занятий, учреждений и видов спорта с помощью умных рекомендаций на нейросетях",
  },
  {
    icon: <PlaneIcon />,
    title: "Геймификация и интерактивность",
    description:
      "Интерактивный подход в выборе, посмотрите на карте!",
  },
  {
    icon: <GiftIcon />,
    title: "Централизованность",
    description:
      "Пользователи, учреждения, тренера - все в одном месте",
  },
];

export const HowItWorksBlock = () => {

  return (
    <section
      id="features"
      className="container text-center py-24"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        {/* How It{" "} */}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {/* Works{" "} */}
          Мы предлагаем уникальные возможности
        </span>
        {/* Step-by-Step Guide */}
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        {/* То чего ранее не было на рынке спорта */}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            // className="bg-muted/50"
            className=" rounded-xl"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>

    </section>
  );
};
