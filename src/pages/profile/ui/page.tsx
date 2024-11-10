"use client"

import { TooltipProvider } from '@/shared/ui/tooltip'
import { Dashboard, Dashboard2 } from '@/widgets/dashboard'

export const ProfilePage = () => {
    return (
      <TooltipProvider>
        {/* <Dashboard /> */}
        <Dashboard2 />

      </TooltipProvider>
    )
}