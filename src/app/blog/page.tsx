import type { Metadata } from 'next'
import { getAllBlogPosts } from '@/services/blog'
import { BlogGrid } from '@/components/blog/BlogGrid'
import { SectionWrapper } from '@/components/shared/SectionWrapper'

export const metadata: Metadata = {
  title: 'Blog - Shivnandan Soni',
  description: 'Read articles about web development, JavaScript, React, Next.js, and other modern technologies.',
}

export default async function BlogPage() {
  const posts = await getAllBlogPosts()

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrapper>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
              Blog
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Thoughts, insights, and tutorials on web development and technology
            </p>
          </div>
        </SectionWrapper>

        <SectionWrapper delay={0.2}>
          <BlogGrid initialPosts={posts} />
        </SectionWrapper>
      </div>
    </div>
  )
}