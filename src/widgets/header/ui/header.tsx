import { ThemeToggle } from '@/shared/ui'
import { cn } from '@/shared/utils'
import { MobileSidebar } from '@/widgets/sidebar'
import { UserMenu } from './user-menu'
import { Badge } from '@/shared/ui/badge'

export function Header() {
  return (
    <header className="sticky inset-x-0 top-0 w-full bg-white">
      <nav className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-2">
          <div className={cn('block lg:!hidden')}>
            <MobileSidebar />
          </div>
          {/* <div>ЛОГОТИП</div> */}
          <img className="h-8 w-full rounded-lg" src="logo/logo-full.png" alt="office content 1" />
          {/* <UserMenu /> */}
        </div>
        <div className="flex h-6 flex-row gap-4">
          <Badge key={1} variant="outline">
            О нас
          </Badge>
          <Badge key={1} variant="outline">
            Вопросы
          </Badge>
          <Badge key={1} variant="outline">
            Контакты
          </Badge>
        </div>
        {/* <ThemeToggle /> */}
      </nav>
    </header>
  )
}
