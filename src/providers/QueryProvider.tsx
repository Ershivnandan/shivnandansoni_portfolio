'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'

export function QueryProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // Cache data for 10 minutes
            staleTime: 10 * 60 * 1000,
            // Keep data in cache for 30 minutes
            gcTime: 30 * 60 * 1000,
            // Refetch on window focus for fresh data
            refetchOnWindowFocus: false,
            // Retry failed requests once
            retry: 1,
          },
        },
      })
  )

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}