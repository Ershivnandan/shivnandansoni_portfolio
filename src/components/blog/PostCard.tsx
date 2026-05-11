'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock } from 'lucide-react'
import { formatDateShort } from '@/utils/date'
import { formatReadTime } from '@/utils/readTime'
import type { BlogPostPreview } from '@/types/blog'
import { getImageProps } from '@/lib/sanity/imageBuilder'

type PostCardProps = {
  post: BlogPostPreview
}

export function PostCard({ post }: PostCardProps) {
  const imageProps = post.coverImage ? getImageProps(post.coverImage, 400, 250) : null

  return (
    <motion.article
      className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
      whileHover={{ y: -4 }}
    >
      <Link href={`/blog/${post.slug.current}`}>
        <div className="relative overflow-hidden">
          <div className="aspect-[16/10] bg-gradient-to-br from-primary/10 to-accent/10 relative">
            {imageProps ? (
              <Image
                src={imageProps.src}
                alt={imageProps.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                placeholder="blur"
                blurDataURL={imageProps.blurDataURL}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <span className="text-4xl">📝</span>
              </div>
            )}
          </div>
        </div>

        <div className="p-6 space-y-3">
          <div className="flex flex-wrap gap-2">
            {post.tags?.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>

          <p className="text-muted-foreground text-sm line-clamp-3 text-pretty">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between text-xs text-muted-foreground pt-2">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Calendar className="h-3 w-3" />
                <span>{formatDateShort(post.publishedAt)}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>{formatReadTime(post.estimatedReadTime)}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}