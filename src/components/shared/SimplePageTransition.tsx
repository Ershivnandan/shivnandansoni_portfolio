'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

type SimplePageTransitionProps = {
  children: React.ReactNode
}

export function SimplePageTransition({ children }: SimplePageTransitionProps) {
  const pathname = usePathname()

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0.9 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
      className="min-h-screen w-full"
      style={{ minHeight: '100vh' }}
    >
      {children}
    </motion.div>
  )
}