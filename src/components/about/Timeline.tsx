'use client'

import { motion } from 'framer-motion'
import { Building2, GraduationCap } from 'lucide-react'

const timelineData = [
  {
    type: 'work',
    title: 'Software Developer Engineer',
    company: 'Leher Sustainable Agri Pvt. Ltd.',
    period: 'January 2025 - Present',
    description: 'Developing and maintaining React Native applications used by multiple stakeholders in production. Built Python-based backend services for crop stress analysis using Google Earth Engine. Integrated Razorpay payment gateway and secure OTP-based authentication.',
    icon: Building2,
    skills: ['React Native', 'Python', 'Google Earth Engine', 'Razorpay', 'OTP Auth']
  },
  {
    type: 'work',
    title: 'Associate Software Developer',
    company: 'InGunagya Technologies Pvt. Ltd.',
    period: 'July 2023 - June 2024',
    description: 'Developed front-end user interfaces for Wiraa, a freelancing platform. Worked with Ionic framework to enable mobile app connectivity with IoT devices. Collaborated with IoT and backend teams for seamless hardware-software integration.',
    icon: Building2,
    skills: ['Ionic', 'Frontend Development', 'IoT Integration', 'APIs', 'Real-time Data']
  },
  {
    type: 'education',
    title: 'BTech in Electronics & Communication Engineering',
    company: 'Global Engineering College',
    period: 'August 2019 - May 2023',
    description: 'Completed Bachelor of Technology in Electronics and Communication Engineering from Jabalpur, Madhya Pradesh. Built strong foundation in engineering principles and technology.',
    icon: GraduationCap,
    skills: ['Electronics', 'Communication Systems', 'Programming', 'Problem Solving']
  },
  {
    type: 'education',
    title: 'Higher Secondary (PCM)',
    company: 'Guru Gobind Singh Khalsa Hr. Sec. School',
    period: 'April 2018 - May 2019',
    description: 'Completed Higher Secondary education with Physics, Chemistry, and Mathematics from Jabalpur, Madhya Pradesh.',
    icon: GraduationCap,
    skills: ['Physics', 'Chemistry', 'Mathematics', 'Analytical Thinking']
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
    opacity: 1
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