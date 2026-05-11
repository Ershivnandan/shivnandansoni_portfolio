'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import type { ProjectFilter as ProjectFilterType } from '@/types/project'
import { cn } from '@/lib/utils'

type ProjectFilterProps = {
  categories: readonly ProjectFilterType[]
  selectedCategory: ProjectFilterType
  onCategoryChange: (category: ProjectFilterType) => void
}

export function ProjectFilter({
  categories,
  selectedCategory,
  onCategoryChange
}: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? 'default' : 'outline'}
          size="sm"
          onClick={() => onCategoryChange(category)}
          className={cn(
            'relative',
            selectedCategory === category && 'shadow-sm'
          )}
        >
          {category}
          {selectedCategory === category && (
            <motion.div
              layoutId="filter-active"
              className="absolute inset-0 bg-primary rounded-md -z-10"
              transition={{ duration: 0.2 }}
            />
          )}
        </Button>
      ))}
    </div>
  )
}