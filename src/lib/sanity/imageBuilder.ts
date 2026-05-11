import imageUrlBuilder from '@sanity/image-url'
import { client } from './client'
import type { SanityImage } from '@/types/sanity'

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImage) {
  return builder.image(source)
}

export function getImageProps(
  image: SanityImage,
  width: number = 800,
  height?: number
) {
  let imageBuilder = urlFor(image).width(width).quality(80)

  if (height) {
    imageBuilder = imageBuilder.height(height)
  }

  if (image.hotspot) {
    imageBuilder = imageBuilder.crop('focalpoint').fit('crop')
  }

  return {
    src: imageBuilder.url(),
    blurDataURL: urlFor(image).width(20).quality(20).blur(20).url(),
    alt: image.alt || 'Image'
  }
}