'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type SectionWrapperProps = {
  children: React.ReactNode
  className?: string
  id?: string
  delay?: number
}

export function SectionWrapper({
  children,
  className,
  id,
  delay = 0
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={cn('py-16 sm:py-24', className)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: 'easeOut'
      }}
    >
      {children}
    </motion.section>
  )
}