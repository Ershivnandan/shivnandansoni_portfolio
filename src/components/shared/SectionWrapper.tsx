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
    <section
      id={id}
      className={cn('py-8 sm:py-12', className)}
    >
      {children}
    </section>
  )
}