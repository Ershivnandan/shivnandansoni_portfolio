'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { PostCard } from './PostCard'
import { BlogFilter } from './BlogFilter'
import { filterBlogPostsByTag, getUniqueTags } from '@/services/blog'
import type { BlogPostPreview } from '@/types/blog'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

type BlogGridProps = {
  initialPosts: BlogPostPreview[]
}

export function BlogGrid({ initialPosts }: BlogGridProps) {
  const [selectedTag, setSelectedTag] = useState('All')

  const uniqueTags = useMemo(() => getUniqueTags(initialPosts), [initialPosts])
  const filteredPosts = useMemo(() => filterBlogPostsByTag(initialPosts, selectedTag), [initialPosts, selectedTag])

  if (initialPosts.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Coming Soon!
        </h2>
        <p className="text-muted-foreground">
          I'm working on some exciting blog posts. Check back soon for insights on web development,
          JavaScript, React, and other modern technologies.
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-12">
      <BlogFilter
        tags={['All', ...uniqueTags]}
        selectedTag={selectedTag}
        onTagChange={setSelectedTag}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredPosts.map((post, index) => (
          <motion.div
            key={post._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: index * 0.1
              }
            }}
          >
            <PostCard post={post} />
          </motion.div>
        ))}
      </motion.div>

      {filteredPosts.length === 0 && selectedTag !== 'All' && (
        <div className="text-center py-16">
          <p className="text-muted-foreground text-lg">
            No posts found for the selected tag.
          </p>
        </div>
      )}
    </div>
  )
}