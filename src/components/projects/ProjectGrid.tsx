'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ProjectCard } from './ProjectCard'
import { ProjectFilter } from './ProjectFilter'
import { getAllProjects, filterProjectsByCategory } from '@/services/projects'
import { PROJECT_CATEGORIES } from '@/constants/projects'
import type { ProjectFilter as ProjectFilterType } from '@/types/project'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

export function ProjectGrid() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectFilterType>('All')
  const allProjects = getAllProjects()
  const filteredProjects = filterProjectsByCategory(allProjects, selectedCategory)

  return (
    <div className="space-y-12">
      <ProjectFilter
        categories={PROJECT_CATEGORIES}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: index * 0.1
                }
              }}
              exit={{ opacity: 0, y: -20 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <p className="text-muted-foreground text-lg">
            No projects found for the selected category.
          </p>
        </motion.div>
      )}
    </div>
  )
}