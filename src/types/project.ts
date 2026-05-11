export type Project = {
  id: string
  title: string
  description: string
  longDescription?: string
  tags: string[]
  category: ProjectCategory
  imageUrl: string
  liveUrl?: string
  githubUrl?: string
  featured: boolean
  completedAt: string
  techStack: string[]
}

export type ProjectCategory = 'Web' | 'Mobile' | 'Open Source' | 'AI/ML' | 'Desktop' | 'API'

export type ProjectFilter = ProjectCategory | 'All'