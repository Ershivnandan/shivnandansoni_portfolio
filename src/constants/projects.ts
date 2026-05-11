import type { Project } from '@/types/project'

export const SAMPLE_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with Next.js, TypeScript, and Stripe integration',
    longDescription: 'A comprehensive e-commerce platform built with modern web technologies. Features include user authentication, product catalog, shopping cart, payment processing, order management, and admin dashboard. Optimized for performance and SEO with server-side rendering.',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Prisma', 'PostgreSQL'],
    category: 'Web',
    imageUrl: '/placeholder-project-1.jpg',
    liveUrl: 'https://ecommerce-demo.vercel.app',
    githubUrl: 'https://github.com/shivnandansoni/ecommerce-platform',
    featured: true,
    completedAt: '2024-12-01',
    techStack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Prisma', 'PostgreSQL', 'Vercel']
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates',
    longDescription: 'A productivity-focused task management application that enables teams to collaborate effectively. Features drag-and-drop task organization, real-time updates, deadline tracking, team permissions, and analytics dashboard.',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    category: 'Web',
    imageUrl: '/placeholder-project-2.jpg',
    liveUrl: 'https://taskflow-app.netlify.app',
    githubUrl: 'https://github.com/shivnandansoni/task-management',
    featured: false,
    completedAt: '2024-10-15',
    techStack: ['React', 'Node.js', 'Express', 'Socket.io', 'MongoDB', 'JWT', 'Material-UI']
  },
  {
    id: '3',
    title: 'React Component Library',
    description: 'Reusable component library with comprehensive documentation',
    longDescription: 'A production-ready component library built for scalable design systems. Includes over 50 customizable components, TypeScript support, accessibility compliance, and comprehensive Storybook documentation.',
    tags: ['React', 'TypeScript', 'Storybook', 'Rollup'],
    category: 'Open Source',
    imageUrl: '/placeholder-project-3.jpg',
    githubUrl: 'https://github.com/shivnandansoni/react-ui-lib',
    featured: true,
    completedAt: '2024-11-20',
    techStack: ['React', 'TypeScript', 'Storybook', 'Rollup', 'Jest', 'Testing Library', 'Chromatic']
  },
  {
    id: '4',
    title: 'Mobile Weather App',
    description: 'Cross-platform weather application with location-based forecasts',
    longDescription: 'A beautiful, intuitive weather application that provides accurate forecasts and weather alerts. Features include location-based weather, 7-day forecasts, weather maps, severe weather alerts, and offline functionality.',
    tags: ['React Native', 'TypeScript', 'Weather API'],
    category: 'Mobile',
    imageUrl: '/placeholder-project-4.jpg',
    githubUrl: 'https://github.com/shivnandansoni/weather-app',
    featured: false,
    completedAt: '2024-09-30',
    techStack: ['React Native', 'TypeScript', 'Expo', 'Weather API', 'AsyncStorage', 'React Navigation']
  },
  {
    id: '5',
    title: 'AI Code Assistant',
    description: 'VS Code extension for AI-powered code completion and refactoring',
    longDescription: 'An intelligent code assistant that helps developers write better code faster. Features include context-aware code completion, automated refactoring suggestions, code documentation generation, and bug detection.',
    tags: ['TypeScript', 'VS Code API', 'OpenAI', 'Node.js'],
    category: 'AI/ML',
    imageUrl: '/placeholder-project-5.jpg',
    githubUrl: 'https://github.com/shivnandansoni/ai-code-assistant',
    featured: true,
    completedAt: '2024-08-15',
    techStack: ['TypeScript', 'VS Code Extension API', 'OpenAI API', 'Node.js', 'Webpack']
  },
  {
    id: '6',
    title: 'GraphQL API Gateway',
    description: 'Scalable GraphQL gateway for microservices architecture',
    longDescription: 'A high-performance GraphQL gateway that orchestrates multiple microservices into a unified API. Features include schema federation, caching, rate limiting, authentication, and comprehensive monitoring.',
    tags: ['GraphQL', 'Node.js', 'Apollo', 'Docker'],
    category: 'API',
    imageUrl: '/placeholder-project-6.jpg',
    githubUrl: 'https://github.com/shivnandansoni/graphql-gateway',
    featured: false,
    completedAt: '2024-07-10',
    techStack: ['GraphQL', 'Apollo Server', 'Node.js', 'Redis', 'Docker', 'Kubernetes', 'Prometheus']
  }
]

export const PROJECT_CATEGORIES = [
  'All',
  'Web',
  'Mobile',
  'Open Source',
  'AI/ML',
  'Desktop',
  'API'
] as const