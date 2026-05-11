'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function Bio() {
  const profileImageId = process.env.NEXT_PUBLIC_PROFILE_IMAGE_DRIVE_ID
  const profileImageUrl = profileImageId
    ? `https://drive.google.com/uc?export=view&id=${profileImageId}`
    : "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&auto=format&q=80"

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
                src={profileImageUrl}
                alt="Shivnandan Soni"
                width={400}
                height={400}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to a professional placeholder if image doesn't load
                  e.currentTarget.src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&auto=format&q=80"
                }}
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
              Hi there! I'm Shivnandan Soni
            </h2>

            <div className="space-y-4 text-muted-foreground text-lg">
              <p className="text-pretty">
                I'm a passionate Software Developer Engineer with 2+ years of experience in building
                scalable mobile and web applications using React Native, React.js, Node.js, and Python.
                I have a proven track record of delivering production-ready features including REST APIs,
                payment integrations, and AI-driven applications.
              </p>

              <p className="text-pretty">
                My expertise spans across full-stack development, performance optimization, and real-time
                data systems. I specialize in React Native for mobile development, Python for backend
                services, and modern web technologies. I'm passionate about integrating cutting-edge
                technologies like AI, IoT, and payment systems to solve real-world problems.
              </p>

              <p className="text-pretty">
                Currently working at Leher Sustainable Agri, I'm developing applications that help
                revolutionize agriculture through technology. I love building applications that run
                offline with AI capabilities, creating seamless payment experiences, and working with
                cross-functional teams to deliver impactful solutions.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              'Mobile App Developer',
              'AI Enthusiast',
              'Payment Integration Expert',
              'Agriculture Tech Innovator'
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