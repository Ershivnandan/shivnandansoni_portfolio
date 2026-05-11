import type { Metadata } from 'next'
import { Bio } from '@/components/about/Bio'
import { Skills } from '@/components/about/Skills'
import { Timeline } from '@/components/about/Timeline'
import { SectionWrapper } from '@/components/shared/SectionWrapper'

export const metadata: Metadata = {
  title: 'About - Shivnandan Soni',
  description: 'Learn more about Shivnandan Soni, a full-stack developer with expertise in React, Next.js, TypeScript, and modern web technologies.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrapper>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
              About Me
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Passionate about creating exceptional digital experiences with modern technologies
            </p>
          </div>
        </SectionWrapper>

        <SectionWrapper delay={0.1}>
          <Bio />
        </SectionWrapper>

        <SectionWrapper delay={0.2}>
          <Skills />
        </SectionWrapper>

        <SectionWrapper delay={0.3}>
          <Timeline />
        </SectionWrapper>
      </div>
    </div>
  )
}