import { SAMPLE_PROJECTS } from '@/constants/projects'
import type { Project, ProjectFilter } from '@/types/project'

export function getAllProjects(): Project[] {
  return SAMPLE_PROJECTS.sort((a, b) =>
    new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime()
  )
}

export function getFeaturedProjects(): Project[] {
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