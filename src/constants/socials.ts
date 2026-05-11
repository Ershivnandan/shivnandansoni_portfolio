import type { SocialLink } from '@/types/contact'

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/shivnandansoni',
    icon: 'Github',
    username: 'shivnandansoni'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/shivnandansoni',
    icon: 'Linkedin',
    username: 'shivnandansoni'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/shivnandansoni',
    icon: 'Twitter',
    username: '@shivnandansoni'
  },
  {
    name: 'Email',
    url: 'mailto:hello@shivnandansoni.dev',
    icon: 'Mail',
    username: 'hello@shivnandansoni.dev'
  }
]

export const AVAILABILITY_STATUS = {
  available: {
    text: 'Open to opportunities',
    color: 'text-green-600 dark:text-green-400',
    bgColor: 'bg-green-100 dark:bg-green-900/20',
    dotColor: 'bg-green-500'
  },
  busy: {
    text: 'Currently busy',
    color: 'text-amber-600 dark:text-amber-400',
    bgColor: 'bg-amber-100 dark:bg-amber-900/20',
    dotColor: 'bg-amber-500'
  },
  unavailable: {
    text: 'Not looking',
    color: 'text-gray-600 dark:text-gray-400',
    bgColor: 'bg-gray-100 dark:bg-gray-800',
    dotColor: 'bg-gray-400'
  }
} as const

export type AvailabilityStatus = keyof typeof AVAILABILITY_STATUS