export const BLOG_POSTS_QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  coverImage {
    asset->{
      _id,
      url
    },
    alt,
    hotspot
  },
  excerpt,
  tags,
  estimatedReadTime,
  body
}`

export const BLOG_POST_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  publishedAt,
  coverImage {
    asset->{
      _id,
      url
    },
    alt,
    hotspot
  },
  excerpt,
  tags,
  estimatedReadTime,
  body
}`

export const BLOG_POST_SLUGS_QUERY = `*[_type == "post" && defined(slug.current)].slug.current`

export const BLOG_POSTS_SITEMAP_QUERY = `*[_type == "post" && defined(slug.current)] {
  "slug": slug.current,
  "publishedAt": publishedAt
}`