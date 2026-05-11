export const NAVIGATION_ITEMS = [
  {
    name: 'About',
    href: '/about',
    section: 'about'
  },
  {
    name: 'Projects',
    href: '/projects',
    section: 'projects'
  },
  {
    name: 'Blog',
    href: '/blog',
    section: 'blog'
  },
  {
    name: 'Contact',
    href: '/contact',
    section: 'contact'
  }
] as const

export const MOBILE_MENU_ANIMATION = {
  hidden: {
    opacity: 0,
    x: '100%'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30
    }
  },
  exit: {
    opacity: 0,
    x: '100%',
    transition: {
      duration: 0.2
    }
  }
} as const