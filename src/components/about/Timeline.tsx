'use client'

import { motion } from 'framer-motion'
import { Building2, GraduationCap } from 'lucide-react'

const timelineData = [
  {
    type: 'work',
    title: 'Senior Full-Stack Developer',
    company: 'TechCorp Solutions',
    period: '2023 - Present',
    description: 'Leading development of enterprise-level applications using React, Node.js, and cloud technologies. Mentoring junior developers and driving technical decisions.',
    icon: Building2,
    skills: ['React', 'Next.js', 'TypeScript', 'AWS', 'GraphQL']
  },
  {
    type: 'work',
    title: 'Full-Stack Developer',
    company: 'StartupXYZ',
    period: '2021 - 2023',
    description: 'Built and maintained multiple client projects from concept to deployment. Collaborated closely with design and product teams to deliver exceptional user experiences.',
    icon: Building2,
    skills: ['Vue.js', 'Node.js', 'PostgreSQL', 'Docker']
  },
  {
    type: 'work',
    title: 'Frontend Developer',
    company: 'WebAgency Pro',
    period: '2020 - 2021',
    description: 'Developed responsive web applications and improved website performance. Worked with various CMS platforms and e-commerce solutions.',
    icon: Building2,
    skills: ['JavaScript', 'React', 'SCSS', 'WordPress']
  },
  {
    type: 'education',
    title: 'Bachelor of Computer Science',
    company: 'University of Technology',
    period: '2016 - 2020',
    description: 'Graduated with honors. Specialized in software engineering and web technologies. Active member of the computer science club.',
    icon: GraduationCap,
    skills: ['Data Structures', 'Algorithms', 'Database Design', 'Software Engineering']
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

export function Timeline() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Experience & Education
          </h2>
          <p className="text-xl text-muted-foreground text-pretty">
            My journey through the world of technology and continuous learning
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

          {timelineData.map((item, index) => {
            const IconComponent = item.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative flex items-start mb-12 last:mb-0"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center relative z-10">
                  <IconComponent className="h-8 w-8 text-primary-foreground" />
                </div>

                <div className="ml-8 flex-1">
                  <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h3 className="text-xl font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mt-2 sm:mt-0 w-fit">
                        {item.period}
                      </span>
                    </div>

                    <p className="text-lg font-medium text-muted-foreground mb-3">
                      {item.company}
                    </p>

                    <p className="text-muted-foreground mb-4 text-pretty">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}