export type SanityImageAsset = {
  _ref: string
  _type: 'reference'
  url?: string
}

export type SanityImage = {
  asset: SanityImageAsset
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

export type SanitySlug = {
  _type: 'slug'
  current: string
}

export type SanityDocument = {
  _id: string
  _type: string
  _createdAt: string
  _updatedAt: string
  _rev: string
}