import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react'
import { getBlogPost, getBlogPostSlugs } from '@/services/blog'
import { PortableTextRenderer } from '@/components/blog/PortableTextRenderer'
import { ReadingProgress } from '@/components/blog/ReadingProgress'
import { Button } from '@/components/ui/button'
import { formatDate } from '@/utils/date'
import { formatReadTime } from '@/utils/readTime'
import { getImageProps } from '@/lib/sanity/imageBuilder'

type BlogPostPageProps = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = await getBlogPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPost(params.slug)

  if (!post) {
    return {
      title: 'Post Not Found - Shivnandan Soni',
      description: 'The blog post you are looking for could not be found.'
    }
  }

  const imageProps = post.coverImage ? getImageProps(post.coverImage, 1200, 630) : null

  return {
    title: `${post.title} - Shivnandan Soni`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: ['Shivnandan Soni'],
      tags: post.tags,
      images: imageProps ? [
        {
          url: imageProps.src,
          width: 1200,
          height: 630,
          alt: imageProps.alt
        }
      ] : []
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: imageProps ? [imageProps.src] : []
    }
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  const imageProps = post.coverImage ? getImageProps(post.coverImage, 800, 400) : null

  return (
    <>
      <ReadingProgress />
      <article className="min-h-screen pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Button variant="ghost" asChild className="mb-6">
                <Link href="/blog" className="flex items-center space-x-2">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back to Blog</span>
                </Link>
              </Button>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center space-x-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      <Tag className="h-3 w-3" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>

                <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
                  {post.title}
                </h1>

                <div className="flex items-center space-x-6 text-muted-foreground mb-8">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{formatReadTime(post.estimatedReadTime)}</span>
                  </div>
                </div>
              </div>

              {imageProps && (
                <div className="relative aspect-video mb-12 overflow-hidden rounded-xl">
                  <Image
                    src={imageProps.src}
                    alt={imageProps.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 800px"
                    placeholder="blur"
                    blurDataURL={imageProps.blurDataURL}
                    priority
                  />
                </div>
              )}
            </div>

            <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:text-foreground/90 prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-code:text-primary prose-pre:bg-muted prose-pre:text-foreground">
              <PortableTextRenderer content={post.body} />
            </div>
          </div>
        </div>
      </article>
    </>
  )
}