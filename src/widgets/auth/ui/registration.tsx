import Link from "next/link"

import { Button } from "@/shared/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card"
import { Input } from "@/shared/ui/input"
import { Label } from "@/shared/ui/label"

export const RegistrationForm = () => {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Регистрация</CardTitle>
        <CardDescription>
          Введите свои данные для создания учетной записи
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">Имя</Label>
              <Input id="first-name" placeholder="Иван" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">Фамилия</Label>
              <Input id="last-name" placeholder="Иванов" required />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="email@example.ru"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Пароль</Label>
            <Input id="password" type="password" />
          </div>
          <Button type="submit" className="w-full">
            Создать учетную запись
          </Button>
          {/* <Button variant="outline" className="w-full">
            Войти через Госуслуги
          </Button> */}
        </div>
        <div className="mt-4 text-center text-sm">
          У меня уже есть учетная запись?{" "}
          <Link href="#" className="underline">
            Войти
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
