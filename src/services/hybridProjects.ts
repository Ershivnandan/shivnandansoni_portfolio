// Hybrid project service - combines manual curation with GitHub API
import { fetchGitHubRepos, mapGitHubRepoToProject, fetchRepoLanguages } from './github'
import { SAMPLE_PROJECTS } from '@/constants/projects'
import type { Project } from '@/types/project'

// Featured repositories to highlight (manual curation)
const FEATURED_REPOS = [
  'native-ai',
  '3d-ai-assistant',
  'finance-app',
  'portfolio-website',
  'payment-integration'
]

// Repos to exclude from automatic listing
const EXCLUDED_REPOS = [
  'Ershivnandan', // Profile README repo
  '.github',
  'config-files'
]

export async function getHybridProjects(): Promise<Project[]> {
  try {
    console.log('Fetching projects from GitHub API...')

    // Fetch GitHub repositories
    const githubRepos = await fetchGitHubRepos()

    if (githubRepos.length === 0) {
      console.log('No GitHub repos found, using manual projects')
      return SAMPLE_PROJECTS
    }

    // Filter and process repos
    const filteredRepos = githubRepos
      .filter(repo => !repo.fork) // Exclude forked repos
      .filter(repo => !EXCLUDED_REPOS.includes(repo.name))
      .filter(repo => repo.name !== repo.owner.login) // Exclude profile repo
      .sort((a, b) => {
        // Sort by: featured first, then stars, then recent activity
        const aFeatured = FEATURED_REPOS.includes(a.name) ? 1 : 0
        const bFeatured = FEATURED_REPOS.includes(b.name) ? 1 : 0

        if (aFeatured !== bFeatured) return bFeatured - aFeatured
        if (a.stargazers_count !== b.stargazers_count) return b.stargazers_count - a.stargazers_count
        return new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
      })

    // Convert top repos to our project format
    const projects: Project[] = []

    for (const repo of filteredRepos.slice(0, 12)) { // Limit to 12 projects
      try {
        // Fetch languages for better categorization
        const languages = await fetchRepoLanguages(repo.name)
        const project = mapGitHubRepoToProject(repo, languages)
        projects.push(project)
      } catch (error) {
        console.error(`Error processing repo ${repo.name}:`, error)
        // Continue with other repos
      }
    }

    console.log(`Successfully fetched ${projects.length} projects from GitHub`)
    return projects.length > 0 ? projects : SAMPLE_PROJECTS

  } catch (error) {
    console.error('Error in hybrid project service:', error)

    // Fallback to manual projects
    console.log('Falling back to manual projects')
    return SAMPLE_PROJECTS
  }
}

// Get project statistics from GitHub
export async function getProjectStats() {
  try {
    const repos = await fetchGitHubRepos()

    const stats = {
      totalRepos: repos.filter(r => !r.fork).length,
      totalStars: repos.reduce((sum, r) => sum + r.stargazers_count, 0),
      totalForks: repos.reduce((sum, r) => sum + r.forks_count, 0),
      languages: new Set<string>(),
      lastUpdate: repos.length > 0 ? repos[0].pushed_at : null
    }

    // Get unique languages across all repos
    for (const repo of repos.slice(0, 10)) {
      try {
        const languages = await fetchRepoLanguages(repo.name)
        Object.keys(languages).forEach(lang => stats.languages.add(lang))
      } catch (error) {
        // Continue with other repos
      }
    }

    return {
      ...stats,
      languages: Array.from(stats.languages)
    }
  } catch (error) {
    console.error('Error fetching project stats:', error)
    return null
  }
}