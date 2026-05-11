'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import type { PortableTextBlock } from '@/types/blog'
import { getImageProps } from '@/lib/sanity/imageBuilder'

type PortableTextRendererProps = {
  content: PortableTextBlock[]
}

export function PortableTextRenderer({ content }: PortableTextRendererProps) {
  const renderBlock = (block: PortableTextBlock, index: number) => {
    switch (block._type) {
      case 'block':
        return renderTextBlock(block, index)
      case 'image':
        return renderImage(block, index)
      case 'code':
        return renderCodeBlock(block, index)
      default:
        return null
    }
  }

  const renderTextBlock = (block: PortableTextBlock, index: number) => {
    const { style = 'normal', children = [] } = block

    const content = children
      .filter(child => child._type === 'span')
      .map((span, spanIndex) => renderSpan(span, `${index}-${spanIndex}`))

    switch (style) {
      case 'h1':
        return <h1 key={index} className="text-3xl font-bold mt-8 mb-4">{content}</h1>
      case 'h2':
        return <h2 key={index} className="text-2xl font-bold mt-6 mb-3">{content}</h2>
      case 'h3':
        return <h3 key={index} className="text-xl font-semibold mt-4 mb-2">{content}</h3>
      case 'blockquote':
        return (
          <blockquote key={index} className="border-l-4 border-primary pl-4 italic my-4">
            {content}
          </blockquote>
        )
      default:
        return <p key={index} className="mb-4 leading-relaxed">{content}</p>
    }
  }

  const renderSpan = (span: any, key: string) => {
    const { text, marks = [] } = span

    let element = <span key={key}>{text}</span>

    marks.forEach((mark: string) => {
      switch (mark) {
        case 'strong':
          element = <strong key={key}>{element}</strong>
          break
        case 'em':
          element = <em key={key}>{element}</em>
          break
        case 'code':
          element = (
            <code key={key} className="bg-muted px-1 py-0.5 rounded text-sm font-mono">
              {element}
            </code>
          )
          break
      }
    })

    return element
  }

  const renderImage = (block: any, index: number) => {
    if (!block.asset) return null

    const imageProps = getImageProps(block, 800, 400)

    return (
      <figure key={index} className="my-8">
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            src={imageProps.src}
            alt={imageProps.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
            placeholder="blur"
            blurDataURL={imageProps.blurDataURL}
          />
        </div>
        {block.caption && (
          <figcaption className="text-sm text-muted-foreground text-center mt-2">
            {block.caption}
          </figcaption>
        )}
      </figure>
    )
  }

  const renderCodeBlock = (block: any, index: number) => {
    const { code, language = 'javascript' } = block

    return (
      <div key={index} className="my-6">
        <SyntaxHighlighter
          language={language}
          style={oneDark}
          customStyle={{
            borderRadius: '0.5rem',
            fontSize: '0.875rem'
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    )
  }

  if (!content || content.length === 0) {
    return <p className="text-muted-foreground">No content available.</p>
  }

  return (
    <div className="space-y-4">
      {content.map((block, index) => renderBlock(block, index))}
    </div>
  )
}