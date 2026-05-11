import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getAllProjects, getAllProjectsSync } from '@/services/projects'
import type { Project } from '@/types/project'

export const PROJECTS_QUERY_KEY = ['projects'] as const

export function useProjects() {
  return useQuery({
    queryKey: PROJECTS_QUERY_KEY,
    queryFn: getAllProjects,
    initialData: getAllProjectsSync(), // Immediate fallback data
    staleTime: 10 * 60 * 1000, // 10 minutes
  })
}

// Hook to prefetch projects data
export function usePrefetchProjects() {
  const queryClient = useQueryClient()

  const prefetchProjects = async () => {
    // Check if data is already cached and fresh
    const cachedData = queryClient.getQueryData(PROJECTS_QUERY_KEY)
    const queryState = queryClient.getQueryState(PROJECTS_QUERY_KEY)

    // Only prefetch if data doesn't exist or cache is expired
    const now = Date.now()
    const isStale = queryState && queryState.dataUpdatedAt
      ? now - queryState.dataUpdatedAt > 10 * 60 * 1000 // 10 minutes
      : true

    if (!cachedData || isStale) {
      await queryClient.prefetchQuery({
        queryKey: PROJECTS_QUERY_KEY,
        queryFn: getAllProjects,
        staleTime: 10 * 60 * 1000,
      })
    }
  }

  return { prefetchProjects }
}