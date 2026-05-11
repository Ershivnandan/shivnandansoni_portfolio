import { client } from '@/lib/sanity/client'
import {
  BLOG_POSTS_QUERY,
  BLOG_POST_QUERY,
  BLOG_POST_SLUGS_QUERY,
  BLOG_POSTS_SITEMAP_QUERY
} from '@/lib/sanity/queries'
import type { BlogPost, BlogPostPreview } from '@/types/blog'

export async function getAllBlogPosts(): Promise<BlogPostPreview[]> {
  try {
    const posts = await client.fetch(
      BLOG_POSTS_QUERY,
      {},
      { next: { revalidate: 60 } }
    )
    return posts || []
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const post = await client.fetch(
      BLOG_POST_QUERY,
      { slug },
      { next: { revalidate: 300 } }
    )
    return post || null
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

export async function getBlogPostSlugs(): Promise<string[]> {
  try {
    const slugs = await client.fetch(BLOG_POST_SLUGS_QUERY)
    return slugs || []
  } catch (error) {
    console.error('Error fetching blog post slugs:', error)
    return []
  }
}

export async function getBlogPostsForSitemap(): Promise<Array<{ slug: string; publishedAt: string }>> {
  try {
    const posts = await client.fetch(BLOG_POSTS_SITEMAP_QUERY)
    return posts || []
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error)
    return []
  }
}

export function filterBlogPostsByTag(posts: BlogPostPreview[], tag: string): BlogPostPreview[] {
  if (tag === 'All' || !tag) return posts
  return posts.filter(post => post.tags?.includes(tag))
}

export function getUniqueTags(posts: BlogPostPreview[]): string[] {
  const tags = posts.flatMap(post => post.tags || [])
  return Array.from(new Set(tags)).sort()
}