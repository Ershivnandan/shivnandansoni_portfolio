export function calculateReadTime(content: string, wordsPerMinute = 200): number {
  const wordCount = content
    .replace(/<[^>]*>/g, '')
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter(word => word.length > 0).length

  const readTimeMinutes = Math.ceil(wordCount / wordsPerMinute)
  return Math.max(1, readTimeMinutes)
}

export function formatReadTime(minutes: number): string {
  if (minutes === 1) return '1 min read'
  return `${minutes} min read`
}

export function extractPlainText(portableText: any[]): string {
  if (!Array.isArray(portableText)) return ''

  return portableText
    .filter(block => block._type === 'block')
    .map(block =>
      block.children
        ?.filter((child: any) => child._type === 'span')
        ?.map((span: any) => span.text)
        ?.join('') || ''
    )
    .join(' ')
}