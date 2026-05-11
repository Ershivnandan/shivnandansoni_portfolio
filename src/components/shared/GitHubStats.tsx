'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

interface GitHubStatsProps {
  username?: string
  showTitle?: boolean
  compact?: boolean
}

export function GitHubStats({
  username = 'Ershivnandan',
  showTitle = true,
  compact = false,
}: GitHubStatsProps) {
  const statsUrl = `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&hide_border=true&text_color=64748b&icon_color=3b82f6&title_color=0f172a`

  const languagesUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&hide_border=true&text_color=64748b&title_color=0f172a`

  const streakUrl = `https://github-readme-streak-stats.herokuapp.com?user=${username}&theme=transparent&hide_border=true&stroke=64748b&ring=3b82f6&fire=3b82f6&currStreakLabel=0f172a`

  if (compact) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center space-y-4"
      >
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <img
            src={statsUrl}
            alt="GitHub Stats"
            className="rounded-lg transition-transform group-hover:scale-105"
          />
        </a>
      </motion.div>
    )
  }

  return (
    <div className="space-y-8">
      {showTitle && (
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            GitHub Statistics
          </h3>
          <p className="text-muted-foreground">
            My coding activity and favorite technologies
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card border border-border rounded-xl p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-foreground">GitHub Stats</h4>
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
          <img
            src={statsUrl}
            alt="GitHub Stats"
            className="w-full rounded-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-card border border-border rounded-xl p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-foreground">Top Languages</h4>
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
          <img
            src={languagesUrl}
            alt="Top Languages"
            className="w-full rounded-lg"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-card border border-border rounded-xl p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-semibold text-foreground">Contribution Streak</h4>
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
        <div className="flex justify-center">
          <img
            src={streakUrl}
            alt="GitHub Streak"
            className="rounded-lg max-w-full"
          />
        </div>
      </motion.div>
    </div>
  )
}
