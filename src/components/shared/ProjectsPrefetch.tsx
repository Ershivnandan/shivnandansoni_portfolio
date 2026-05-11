'use client'

import { useEffect } from 'react'
import { usePrefetchProjects } from '@/hooks/useProjects'

export function ProjectsPrefetch() {
  const { prefetchProjects } = usePrefetchProjects()

  useEffect(() => {
    // Prefetch projects data when component mounts
    prefetchProjects()
  }, [prefetchProjects])

  return null // This component doesn't render anything
}