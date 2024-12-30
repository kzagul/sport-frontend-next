import { Button } from '@/shared/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card'
import { Input } from '@/shared/ui/input'
import { Label } from '@/shared/ui/label'

export const LoginForm = () => {
  return (
    <Card className="mx-auto w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Вход</CardTitle>
        <CardDescription>
          Введите свой адрес электронной почты ниже, чтобы войти в свою учетную запись.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="email@example.ru" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Пароль</Label>
          <Input id="password" type="password" required />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Войти</Button>
      </CardFooter>
    </Card>
  )
}
