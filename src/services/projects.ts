import { SAMPLE_PROJECTS } from '@/constants/projects'
import { getHybridProjects } from './hybridProjects'
import type { Project, ProjectFilter } from '@/types/project'

// Flag to enable/disable GitHub integration
const USE_GITHUB_API = process.env.NODE_ENV === 'production' || process.env.NEXT_PUBLIC_USE_GITHUB_API === 'true'

export async function getAllProjects(): Promise<Project[]> {
  try {
    if (USE_GITHUB_API) {
      const githubProjects = await getHybridProjects()
      return githubProjects.sort((a, b) =>
        new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime()
      )
    }
  } catch (error) {
    console.error('Error fetching GitHub projects:', error)
  }

  // Fallback to manual projects
  return SAMPLE_PROJECTS.sort((a, b) =>
    new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime()
  )
}

export function getAllProjectsSync(): Project[] {
  return SAMPLE_PROJECTS.sort((a, b) =>
    new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime()
  )
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const allProjects = await getAllProjects()
  return allProjects
    .filter(project => project.featured)
    .sort((a, b) =>
      new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime()
    )
}

export function getFeaturedProjectsSync(): Project[] {
  return SAMPLE_PROJECTS
    .filter(project => project.featured)
    .sort((a, b) =>
      new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime()
    )
}

export function getProjectById(id: string): Project | null {
  return SAMPLE_PROJECTS.find(project => project.id === id) || null
}

export function filterProjectsByCategory(projects: Project[], category: ProjectFilter): Project[] {
  if (category === 'All') return projects
  return projects.filter(project => project.category === category)
}

export function searchProjects(projects: Project[], query: string): Project[] {
  if (!query.trim()) return projects

  const searchTerm = query.toLowerCase()
  return projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm) ||
    project.description.toLowerCase().includes(searchTerm) ||
    project.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
    project.techStack.some(tech => tech.toLowerCase().includes(searchTerm))
  )
}

export function getUniqueCategories(projects: Project[]): ProjectFilter[] {
  const categories = new Set(projects.map(project => project.category))
  return ['All', ...Array.from(categories).sort()] as ProjectFilter[]
}