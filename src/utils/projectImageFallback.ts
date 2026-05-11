// Professional placeholder images based on project categories and tech stack
export const getProjectImageFallback = (
  title: string,
  category: string,
  tags: string[]
): string => {
  const baseUrl = 'https://images.unsplash.com'
  const params = 'w=600&h=400&fit=crop&auto=format&q=80'

  // Create a simple hash from title to ensure consistent images
  const titleHash = title.split('').reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0)
    return a & a
  }, 0)
  const seed = Math.abs(titleHash) % 1000

  // Category-based professional images
  const categoryImages: Record<string, string[]> = {
    'AI/ML': [
      `${baseUrl}/photo-1677442136019-21780ecad995?${params}`, // AI/Neural networks
      `${baseUrl}/photo-1620712943543-bcc4688e7485?${params}`, // Machine learning
      `${baseUrl}/photo-1555949963-aa79dcee981c?${params}`, // Data visualization
    ],
    'Mobile': [
      `${baseUrl}/photo-1512941937669-90a1b58e7e9c?${params}`, // Mobile app development
      `${baseUrl}/photo-1551650975-87deedd944c3?${params}`, // Smartphone coding
      `${baseUrl}/photo-1563013544-824ae1b704d3?${params}`, // Mobile UI/UX
    ],
    'Web': [
      `${baseUrl}/photo-1460925895917-afdab827c52f?${params}`, // Web development
      `${baseUrl}/photo-1517180102446-f3ece451e9d8?${params}`, // Coding setup
      `${baseUrl}/photo-1557804506-669a67965ba0?${params}`, // Web design
    ],
    'API': [
      `${baseUrl}/photo-1558494949-ef010cbdcc31?${params}`, // Server/API
      `${baseUrl}/photo-1544197150-b99a580bb7a8?${params}`, // Database/Backend
      `${baseUrl}/photo-1516321318423-f06f85e504b3?${params}`, // Network/API
    ],
    'Open Source': [
      `${baseUrl}/photo-1556075798-4825dfaaf498?${params}`, // Open source
      `${baseUrl}/photo-1522202176988-66273c2fd55f?${params}`, // Collaboration
      `${baseUrl}/photo-1531297484001-80022131f5a1?${params}`, // Programming
    ]
  }

  // Tech-specific fallbacks
  const techImages: Record<string, string[]> = {
    'React Native': categoryImages['Mobile'],
    'React': categoryImages['Web'],
    'Python': [
      `${baseUrl}/photo-1526379095098-d400fd0bf935?${params}`, // Python coding
      `${baseUrl}/photo-1515879218367-8466d910aaa4?${params}`, // Code editor
    ],
    'AI': categoryImages['AI/ML'],
    'Payment': [
      `${baseUrl}/photo-1556742049-0cfed4f6a45d?${params}`, // Finance/Payment
      `${baseUrl}/photo-1563013544-824ae1b704d3?${params}`, // Mobile payment
    ],
    'Node.js': categoryImages['API'],
    'Three.js': [
      `${baseUrl}/photo-1618005182384-a83a8bd57fbe?${params}`, // 3D graphics
      `${baseUrl}/photo-1633356122544-f134324a6cee?${params}`, // 3D visualization
    ]
  }

  // Find matching tech image first
  for (const tag of tags) {
    if (techImages[tag]) {
      const images = techImages[tag]
      return images[seed % images.length]
    }
  }

  // Fall back to category image
  if (categoryImages[category]) {
    const images = categoryImages[category]
    return images[seed % images.length]
  }

  // Default professional coding image
  const defaultImages = [
    `${baseUrl}/photo-1461749280684-dccba630e2f6?${params}`, // Clean code
    `${baseUrl}/photo-1517077304055-6e89abbf09b0?${params}`, // Development
    `${baseUrl}/photo-1555066931-4365d14bab8c?${params}`, // Programming
  ]

  return defaultImages[seed % defaultImages.length]
}