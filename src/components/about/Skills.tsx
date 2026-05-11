'use client'

import { motion } from 'framer-motion'
import { Code, Database, Cloud, Wrench } from 'lucide-react'

const skillCategories = [
  {
    title: 'Languages & Core',
    icon: Code,
    skills: ['JavaScript/TypeScript', 'Python', 'HTML/CSS', 'ECMAScript', 'Modern JS'],
    color: 'text-blue-500'
  },
  {
    title: 'Frameworks & Libraries',
    icon: Database,
    skills: ['React Native', 'React.js', 'Node.js', 'Express.js', 'FastAPI', 'Three.js', 'Tailwind CSS'],
    color: 'text-green-500'
  },
  {
    title: 'Mobile & AI',
    icon: Cloud,
    skills: ['React Native', 'Expo', 'Local LLM', 'Google Gemini API', 'Eleven Labs TTS', 'Native Modules'],
    color: 'text-purple-500'
  },
  {
    title: 'Tools & Services',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'MongoDB', 'PostgreSQL', 'Postman', 'Google Earth Engine', 'Razorpay', 'Ionic'],
    color: 'text-orange-500'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
}

export function Skills() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-background ${category.color}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground ml-4">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="px-3 py-1.5 bg-muted text-muted-foreground rounded-lg text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}