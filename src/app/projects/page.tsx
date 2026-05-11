import type { Metadata } from 'next'
import { ProjectGrid } from '@/components/projects/ProjectGrid'
import { SectionWrapper } from '@/components/shared/SectionWrapper'

export const metadata: Metadata = {
  title: 'Projects - Shivnandan Soni',
  description: 'Explore my portfolio of web development projects including full-stack applications, open-source contributions, and technical experiments.',
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrapper>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
              Projects
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              A showcase of my work spanning web applications, open-source contributions, and technical experiments
            </p>
          </div>
        </SectionWrapper>

        <SectionWrapper delay={0.2}>
          <ProjectGrid />
        </SectionWrapper>
      </div>
    </div>
  )
}