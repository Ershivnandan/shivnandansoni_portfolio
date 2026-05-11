'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Download, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { downloadResume } from '@/lib/resumeDownload'
import { useToast } from '@/hooks/useToast'
import Link from 'next/link'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.5
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

export function Hero() {
  const { toast } = useToast()

  const handleResumeDownload = async () => {
    try {
      await downloadResume()
      toast({
        title: 'Resume Downloaded',
        description: 'Thank you for your interest!',
        variant: 'success'
      })
    } catch (error) {
      toast({
        title: 'Download Failed',
        description: 'Please try again or contact me directly.',
        variant: 'destructive'
      })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 animate-gradient" />

      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={itemVariants}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              👋 Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance"
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Shivnandan Soni
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl text-muted-foreground mb-4 text-balance"
          >
            Full-Stack Developer
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty"
          >
            I craft exceptional digital experiences with modern web technologies,
            focusing on performance, accessibility, and user-centered design.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              asChild
              size="lg"
              className="min-w-[200px] group"
            >
              <Link href="/projects" className="flex items-center justify-center">
                <Eye className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                View My Work
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={handleResumeDownload}
              className="min-w-[200px] group flex items-center justify-center"
            >
              <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Download Resume
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-16 flex justify-center"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="text-muted-foreground cursor-pointer"
              onClick={() => {
                document.getElementById('about')?.scrollIntoView({
                  behavior: 'smooth'
                })
              }}
            >
              <ArrowDown className="h-6 w-6" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}