"use client"

import { TooltipProvider } from '@/shared/ui/tooltip'
import { Dashboard } from '@/widgets/dashboard'

export const ProfilePage = () => {
    return (
      <TooltipProvider>
        <Dashboard />
      </TooltipProvider>
    )
}