'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type BlogFilterProps = {
  tags: string[]
  selectedTag: string
  onTagChange: (tag: string) => void
}

export function BlogFilter({ tags, selectedTag, onTagChange }: BlogFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {tags.map((tag) => (
        <Button
          key={tag}
          variant={selectedTag === tag ? 'default' : 'outline'}
          size="sm"
          onClick={() => onTagChange(tag)}
          className={cn(
            'relative',
            selectedTag === tag && 'shadow-sm'
          )}
        >
          {tag}
          {selectedTag === tag && (
            <motion.div
              layoutId="blog-filter-active"
              className="absolute inset-0 bg-primary rounded-md -z-10"
              transition={{ duration: 0.2 }}
            />
          )}
        </Button>
      ))}
    </div>
  )
}