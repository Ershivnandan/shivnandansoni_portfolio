import type { Project } from '@/types/project'

export const SAMPLE_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Native AI Mobile App (Offline AI)',
    description: 'On-device AI mobile application running AI models locally without internet connectivity',
    longDescription: 'Developed a mobile application capable of running AI models locally on-device without internet connectivity. Enabled real-time AI responses with zero network dependency, ensuring privacy-first architecture. Implemented chat-based UI for human-like interaction. Built and deployed using EAS build system.',
    tags: ['React Native', 'Local LLM', 'Expo', 'Native Modules'],
    category: 'AI/ML',
    imageUrl: '/images/projects/native-ai-app.jpg',
    githubUrl: 'https://github.com/Ershivnandan/native-ai-app',
    featured: true,
    completedAt: '2026-05-01',
    techStack: ['React Native', 'Local LLM', 'Expo', 'Native Modules', 'EAS Build', 'Offline AI']
  },
  {
    id: '2',
    title: '3D AI Assistant',
    description: 'AI chatbot that clones human behavior with facial expressions on web',
    longDescription: 'Built an AI chat bot which clones to human in web and interacts with facial expressions. This AI bot is powered by Node.js backend with Google Gemini API, Leva, and Eleven Labs for Indian accent TTS. Integrated Gemini AI API to understand and respond on chat context.',
    tags: ['React Three Fiber', 'Next.js', 'Tailwind CSS', 'Gemini AI'],
    category: 'AI/ML',
    imageUrl: '/images/projects/3d-ai-assistant.jpg',
    githubUrl: 'https://github.com/Ershivnandan/3d-ai-assistant',
    featured: true,
    completedAt: '2025-02-01',
    techStack: ['React Three Fiber', 'Next.js', 'Tailwind CSS', 'Node.js', 'Google Gemini API', 'Leva', 'Eleven Labs TTS']
  },
  {
    id: '3',
    title: 'Finance App',
    description: 'Expense tracking and analysis dashboard with interactive data visualization',
    longDescription: 'Developed a financial dashboard for tracking income and expenses with an intuitive UI. Integrated Context API for state management, ensuring efficient and scalable data flow. Implemented interactive data visualization using E Charts for insightful financial analysis.',
    tags: ['React', 'Context API', 'Tailwind CSS', 'E Charts'],
    category: 'Web',
    imageUrl: '/images/projects/finance-app.jpg',
    githubUrl: 'https://github.com/Ershivnandan/finance-app',
    featured: true,
    completedAt: '2023-06-01',
    techStack: ['React', 'Context API', 'Tailwind CSS', 'E Charts', 'State Management', 'Data Visualization']
  },
  {
    id: '4',
    title: 'Wiraa Freelancing Platform',
    description: 'Frontend interfaces for freelancing platform with IoT device integration',
    longDescription: 'Developed front-end user interfaces for Wiraa, a freelancing platform. Worked with Ionic framework to enable mobile app connectivity with IoT devices, allowing smart bottle synchronization with the application. Integrated frontend applications with backend APIs to display real-time and device-related data.',
    tags: ['Ionic', 'Frontend', 'IoT Integration', 'APIs'],
    category: 'Web',
    imageUrl: '/images/projects/wiraa-platform.jpg',
    githubUrl: 'https://github.com/Ershivnandan/wiraa-platform',
    featured: false,
    completedAt: '2024-03-01',
    techStack: ['Ionic Framework', 'Frontend Development', 'IoT Integration', 'REST APIs', 'Real-time Data']
  },
  {
    id: '5',
    title: 'Crop Stress Analysis System',
    description: 'Python-based backend services for agricultural crop stress analysis',
    longDescription: 'Built Python-based backend services for crop stress analysis using Google Earth Engine. Developed systems for analyzing agricultural data and providing insights for sustainable farming practices. Integrated with React Native applications for field operators and stakeholders.',
    tags: ['Python', 'Google Earth Engine', 'Backend', 'Agricultural Tech'],
    category: 'API',
    imageUrl: '/images/projects/crop-analysis.jpg',
    githubUrl: 'https://github.com/Ershivnandan/crop-analysis',
    featured: false,
    completedAt: '2025-01-15',
    techStack: ['Python', 'Google Earth Engine', 'FastAPI', 'Agricultural Analysis', 'Data Processing']
  },
  {
    id: '6',
    title: 'Payment Integration System',
    description: 'Razorpay payment gateway integration with secure transaction processing',
    longDescription: 'Integrated Razorpay payment gateway with order creation, verification, wallet credit, and payouts functionality. Improved transaction reliability and implemented secure OTP-based authentication using SMS and WebOTP for enhanced user onboarding experience.',
    tags: ['Razorpay', 'Payment Gateway', 'OTP Auth', 'Security'],
    category: 'API',
    imageUrl: '/images/projects/payment-system.jpg',
    githubUrl: 'https://github.com/Ershivnandan/payment-integration',
    featured: false,
    completedAt: '2025-01-01',
    techStack: ['Razorpay API', 'Payment Processing', 'OTP Authentication', 'SMS Integration', 'WebOTP']
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