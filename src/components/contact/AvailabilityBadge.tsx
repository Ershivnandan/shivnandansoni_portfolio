'use client'

import { motion } from 'framer-motion'
import { AVAILABILITY_STATUS } from '@/constants/socials'
import type { AvailabilityStatus } from '@/constants/socials'
import { cn } from '@/lib/utils'

const currentStatus: AvailabilityStatus = 'available'

export function AvailabilityBadge() {
  const status = AVAILABILITY_STATUS[currentStatus]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={cn(
        'inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium',
        status.bgColor,
        status.color
      )}
    >
      <motion.div
        className={cn('w-2 h-2 rounded-full', status.dotColor)}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <span>{status.text}</span>
    </motion.div>
  )
}