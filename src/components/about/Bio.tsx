'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function Bio() {
  return (
    <section className="py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative w-full max-w-md mx-auto lg:mx-0">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden">
              <Image
                src="/placeholder-profile.jpg"
                alt="Shivnandan Soni"
                width={400}
                height={400}
                className="w-full h-full object-cover"
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--primary)/0.1), hsl(var(--accent)/0.1))'
                }}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground text-2xl font-bold">👋</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Hi there! I'm Shivnandan
            </h2>

            <div className="space-y-4 text-muted-foreground text-lg">
              <p className="text-pretty">
                I'm a passionate full-stack developer with over 5 years of experience building
                scalable web applications. My journey in tech started with a curiosity about
                how things work behind the screen, and it has evolved into a career focused on
                creating exceptional digital experiences.
              </p>

              <p className="text-pretty">
                I specialize in modern JavaScript technologies, with expertise in React, Next.js,
                TypeScript, and Node.js. I believe in writing clean, maintainable code and
                following best practices that prioritize performance, accessibility, and user experience.
              </p>

              <p className="text-pretty">
                When I'm not coding, you'll find me contributing to open-source projects,
                exploring new technologies, or sharing knowledge with the developer community
                through blog posts and mentoring. I'm always excited to take on new challenges
                and collaborate with talented teams to build something amazing.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              'Problem Solver',
              'Team Player',
              'Continuous Learner',
              'Open Source Contributor'
            ].map((trait, index) => (
              <motion.span
                key={trait}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
              >
                {trait}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}