// GitHub API service to fetch real repositories
export type GitHubRepo = {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  languages_url: string
  topics: string[]
  stargazers_count: number
  forks_count: number
  fork: boolean
  created_at: string
  updated_at: string
  pushed_at: string
  owner: {
    login: string
  }
}

export type GitHubLanguages = Record<string, number>

const GITHUB_API_BASE = 'https://api.github.com'
const USERNAME = 'Ershivnandan'

// Cache for GitHub API responses
let reposCache: GitHubRepo[] | null = null
let cacheTimestamp: number | null = null
const CACHE_DURATION = 10 * 60 * 1000 // 10 minutes

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    // Check cache first
    if (reposCache && cacheTimestamp && Date.now() - cacheTimestamp < CACHE_DURATION) {
      return reposCache
    }

    const response = await fetch(`${GITHUB_API_BASE}/users/${USERNAME}/repos?sort=updated&per_page=100`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        // Add GitHub token if available for higher rate limits
        ...(process.env.GITHUB_TOKEN && {
          'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`
        })
      }
    })

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`)
    }

    const repos = await response.json()

    // Cache the results
    reposCache = repos
    cacheTimestamp = Date.now()

    return repos
  } catch (error) {
    console.error('Error fetching GitHub repos:', error)
    return []
  }
}

export async function fetchRepoLanguages(repoName: string): Promise<GitHubLanguages> {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/repos/${USERNAME}/${repoName}/languages`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        ...(process.env.GITHUB_TOKEN && {
          'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`
        })
      }
    })

    if (!response.ok) {
      return {}
    }

    return await response.json()
  } catch (error) {
    console.error(`Error fetching languages for ${repoName}:`, error)
    return {}
  }
}

// Map GitHub repo to our project format
import type { Project, ProjectCategory } from '@/types/project'

export function mapGitHubRepoToProject(repo: GitHubRepo, languages: GitHubLanguages = {}): Project {
  const languageList = Object.keys(languages)

  // Categorize based on languages and topics
  const category = categorizeRepo(repo, languageList)

  // Generate tags from languages and topics
  const tags = [
    ...languageList.slice(0, 4), // Top 4 languages
    ...repo.topics.slice(0, 3)   // Top 3 topics
  ].filter((tag, index, self) => self.indexOf(tag) === index) // Remove duplicates

  return {
    id: repo.id.toString(),
    title: formatRepoTitle(repo.name),
    description: repo.description || `A ${category.toLowerCase()} project built with ${languageList.slice(0, 2).join(' and ')}.`,
    longDescription: repo.description || `This project demonstrates modern development practices using ${languageList.join(', ')}. Built with attention to code quality and user experience.`,
    tags: tags.slice(0, 6),
    category,
    imageUrl: `/images/projects/${repo.name}.jpg`,
    liveUrl: repo.homepage || undefined,
    githubUrl: repo.html_url,
    featured: repo.stargazers_count > 5 || repo.topics.includes('featured'),
    completedAt: repo.pushed_at,
    techStack: languageList.concat(repo.topics).slice(0, 8)
  }
}

function formatRepoTitle(repoName: string): string {
  return repoName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

function categorizeRepo(repo: GitHubRepo, languages: string[]): ProjectCategory {
  const name = repo.name.toLowerCase()
  const description = (repo.description || '').toLowerCase()
  const topics = repo.topics.map(t => t.toLowerCase())

  // AI/ML projects
  if (name.includes('ai') || name.includes('ml') || description.includes('ai') ||
      topics.some(t => ['ai', 'ml', 'machine-learning', 'neural', 'tensorflow', 'pytorch'].includes(t)) ||
      languages.includes('Python')) {
    return 'AI/ML'
  }

  // Mobile projects
  if (name.includes('mobile') || name.includes('app') ||
      topics.some(t => ['mobile', 'ios', 'android', 'react-native'].includes(t)) ||
      languages.includes('Swift') || languages.includes('Kotlin') || languages.includes('Dart')) {
    return 'Mobile'
  }

  // API projects
  if (name.includes('api') || name.includes('backend') || name.includes('server') ||
      topics.some(t => ['api', 'backend', 'server', 'microservice'].includes(t)) ||
      languages.includes('Go') || languages.includes('Rust')) {
    return 'API'
  }

  // Web projects (default for JavaScript/TypeScript)
  if (languages.includes('JavaScript') || languages.includes('TypeScript') ||
      languages.includes('HTML') || languages.includes('CSS')) {
    return 'Web'
  }

  return 'Open Source'
}