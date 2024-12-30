'use client'

import { ThemeProvider } from './theme-provider'
import { QueryClient, QueryClientProvider, HydrationBoundary, Hydrate } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { SessionProvider, SessionProviderProps } from 'next-auth/react'

type AppProvidersProps = {
  // queryClient: QueryClientProvider
  queryClient: any
  dehydratedState: any
  session: SessionProviderProps['session']
  children: React.ReactNode
}

export const AppProviders = ({
  queryClient,
  session,
  children,
  dehydratedState,
}: AppProvidersProps) => {
  return (
    // <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <SessionProvider session={session}>
        {/* <Hydrate state={dehydratedState}> */}
        {children}
        {/* </Hydrate> */}
      </SessionProvider>
    </ThemeProvider>
    // <ReactQueryDevtools initialIsOpen={true} />
    // </QueryClientProvider>
  )
}
