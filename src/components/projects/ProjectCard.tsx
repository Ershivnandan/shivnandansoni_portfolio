'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Calendar, Star } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { formatDateShort } from '@/utils/date'
import { getProjectImageFallback } from '@/utils/projectImageFallback'
import { getProjectImage } from '@/utils/projectImages'
import type { Project } from '@/types/project'
import { cn } from '@/lib/utils'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const fallbackImage = getProjectImageFallback(
    project.title,
    project.category,
    project.tags
  )

  const finalImage = getProjectImage(project.id, fallbackImage)

  return (
    <motion.div
      className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col"
      whileHover={{ y: -4 }}
    >
      <div className="relative overflow-hidden">
        <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative">
          <Image
            src={finalImage}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{
              background:
                'linear-gradient(135deg, hsl(var(--primary)/0.1), hsl(var(--accent)/0.1))',
            }}
          />
        </div>

        {project.featured && (
          <div className="absolute top-4 left-4">
            <div className="flex items-center space-x-1 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
              <Star className="h-3 w-3 fill-current" />
              <span>Featured</span>
            </div>
          </div>
        )}

        <div className="absolute top-4 right-4">
          <div className="bg-background/80 backdrop-blur-sm px-2 py-1 rounded text-xs text-muted-foreground">
            {project.category}
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4 flex-1 flex flex-col">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm text-pretty line-clamp-3 mb-4">
            {project.description}
          </p>
        </div>

        <div className="mt-auto space-y-4">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-medium"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-medium">
                +{project.tags.length - 4}
              </span>
            )}
          </div>

          <div className="flex items-center text-xs text-muted-foreground">
            <Calendar className="h-3 w-3 mr-1" />
            {formatDateShort(project.completedAt)}
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="flex space-x-2">
              {project.liveUrl && (
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="h-8 px-3"
                >
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1"
                  >
                    <ExternalLink className="h-3 w-3" />
                    <span>Live</span>
                  </Link>
                </Button>
              )}

              {project.githubUrl && (
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="h-8 px-3"
                >
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1"
                  >
                    <FaGithub className="h-3 w-3" />
                    <span>Code</span>
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
