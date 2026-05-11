'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Sun, Moon, Stars, Palette } from 'lucide-react'
import { THEMES } from '@/constants/themes'
import { motion, AnimatePresence } from 'framer-motion'

const iconMap = {
  Sun,
  Moon,
  Stars,
  Palette
}

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="h-9 w-9">
        <Sun className="h-4 w-4" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  const currentThemeIndex = THEMES.findIndex(t => t.value === theme)
  const nextThemeIndex = (currentThemeIndex + 1) % THEMES.length
  const nextTheme = THEMES[nextThemeIndex]
  const currentTheme = THEMES[currentThemeIndex]

  const handleThemeChange = () => {
    setTheme(nextTheme.value)
  }

  const IconComponent = iconMap[currentTheme?.icon as keyof typeof iconMap] || Sun

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleThemeChange}
      className="h-9 w-9 relative overflow-hidden"
      title={`Switch to ${nextTheme.name} theme`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 180, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <IconComponent className="h-4 w-4" />
        </motion.div>
      </AnimatePresence>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}