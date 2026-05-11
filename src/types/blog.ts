export type BlogPost = {
  _id: string
  title: string
  slug: { current: string }
  publishedAt: string
  coverImage: {
    asset: {
      _ref: string
      _type: 'reference'
      url?: string
    }
    alt?: string
    hotspot?: {
      x: number
      y: number
      height: number
      width: number
    }
    crop?: {
      top: number
      bottom: number
      left: number
      right: number
    }
  }
  excerpt: string
  tags: string[]
  estimatedReadTime: number
  body: PortableTextBlock[]
}

export type PortableTextBlock = {
  _type: string
  _key: string
  style?: string
  children?: PortableTextSpan[]
  markDefs?: PortableTextMarkDef[]
  level?: number
  listItem?: string
  asset?: {
    _ref: string
  }
  alt?: string
  caption?: string
}

type PortableTextSpan = {
  _type: 'span'
  _key: string
  text: string
  marks?: string[]
}

type PortableTextMarkDef = {
  _type: string
  _key: string
  href?: string
}

export type BlogPostPreview = Pick<
  BlogPost,
  '_id' | 'title' | 'slug' | 'publishedAt' | 'coverImage' | 'excerpt' | 'tags' | 'estimatedReadTime'
>