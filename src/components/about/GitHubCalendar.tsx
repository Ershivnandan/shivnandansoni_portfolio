'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { GitBranch } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

// GitHub contribution calendar component
export function GitHubCalendar() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for the GitHub calendar
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-16"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <FaGithub className="h-8 w-8 text-foreground mr-3" />
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              GitHub Activity
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            My coding journey visualized through GitHub contributions
          </p>
        </div>

        <div className="bg-card border border-border rounded-xl p-6">
          {isLoading ? (
            <GitHubCalendarSkeleton />
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-muted-foreground">
                    <strong className="text-foreground">1,247</strong> contributions in the last year
                  </span>
                </div>
                <a
                  href="https://github.com/Ershivnandan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  View on GitHub →
                </a>
              </div>

              {/* GitHub Calendar Embed */}
              <div className="w-full">
                <img
                  src="https://ghchart.rshah.org/2563eb/Ershivnandan"
                  alt="GitHub Contribution Chart"
                  className="w-full rounded-lg"
                  style={{ filter: 'brightness(1.1) contrast(1.1)' }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    const fallback = e.currentTarget.parentElement?.nextElementSibling as HTMLElement
                    if (fallback) fallback.style.display = 'block'
                  }}
                />
                <div
                  className="w-full p-8 text-center bg-muted/30 rounded-lg hidden"
                  style={{ display: 'none' }}
                >
                  <p className="text-muted-foreground">
                    🔄 Loading GitHub contributions...
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    <a
                      href={`https://github.com/Ershivnandan`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80"
                    >
                      View directly on GitHub →
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Less</span>
                <div className="flex items-center space-x-1">
                  <div className="w-2.5 h-2.5 bg-muted rounded-sm"></div>
                  <div className="w-2.5 h-2.5 bg-primary/20 rounded-sm"></div>
                  <div className="w-2.5 h-2.5 bg-primary/40 rounded-sm"></div>
                  <div className="w-2.5 h-2.5 bg-primary/60 rounded-sm"></div>
                  <div className="w-2.5 h-2.5 bg-primary/80 rounded-sm"></div>
                  <div className="w-2.5 h-2.5 bg-primary rounded-sm"></div>
                </div>
                <span>More</span>
              </div>
            </div>
          )}
        </div>

        {/* GitHub Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
        >
          <GitHubStatsCard
            title="GitHub Profile"
            username="Ershivnandan"
            description="Visit my GitHub profile to see all repositories and contributions"
          />

          <GitHubStatsCard
            title="Recent Activity"
            username="Ershivnandan"
            description="Latest commits and project updates across repositories"
            showLanguages
          />
        </motion.div>
      </div>
    </motion.section>
  )
}

// Loading skeleton for GitHub calendar
function GitHubCalendarSkeleton() {
  return (
    <div className="animate-pulse space-y-6">
      <div className="flex items-center justify-between">
        <div className="h-4 bg-muted rounded w-48"></div>
        <div className="h-4 bg-muted rounded w-24"></div>
      </div>

      <div className="space-y-1">
        {Array.from({ length: 7 }).map((_, i) => (
          <div key={i} className="flex space-x-1">
            {Array.from({ length: 53 }).map((_, j) => (
              <div
                key={j}
                className="w-2.5 h-2.5 bg-muted rounded-sm"
                style={{
                  animationDelay: `${(i * 53 + j) * 10}ms`
                }}
              ></div>
            ))}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div className="h-3 bg-muted rounded w-8"></div>
        <div className="flex items-center space-x-1">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="w-2.5 h-2.5 bg-muted rounded-sm"></div>
          ))}
        </div>
        <div className="h-3 bg-muted rounded w-8"></div>
      </div>
    </div>
  )
}

// GitHub Stats Card Component
function GitHubStatsCard({
  title,
  username,
  description,
  showLanguages = false
}: {
  title: string
  username: string
  description: string
  showLanguages?: boolean
}) {
  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80 transition-colors"
        >
          <FaGithub className="h-5 w-5" />
        </a>
      </div>

      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">{description}</p>

        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="bg-muted/50 rounded-lg p-3">
            <div className="text-lg font-semibold text-foreground">50+</div>
            <div className="text-xs text-muted-foreground">Repositories</div>
          </div>
          <div className="bg-muted/50 rounded-lg p-3">
            <div className="text-lg font-semibold text-foreground">2+</div>
            <div className="text-xs text-muted-foreground">Years Coding</div>
          </div>
        </div>

        {showLanguages && (
          <div className="space-y-2">
            <div className="text-sm font-medium text-foreground">Top Languages:</div>
            <div className="flex flex-wrap gap-1">
              {['JavaScript', 'Python', 'TypeScript', 'React'].map((lang) => (
                <span
                  key={lang}
                  className="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        )}

        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
        >
          View on GitHub →
        </a>
      </div>
    </div>
  )
}