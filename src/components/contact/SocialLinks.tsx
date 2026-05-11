'use client'

import { motion } from 'framer-motion'
import { Copy, Check } from 'lucide-react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { SOCIAL_LINKS } from '@/constants/socials'
import { useToast } from '@/hooks/useToast'

const iconMap = {
  Github: FaGithub,
  Linkedin: FaLinkedin,
  Twitter: FaTwitter,
  Mail: MdEmail
}

export function SocialLinks() {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const { toast } = useToast()

  const handleEmailCopy = async () => {
    const emailLink = SOCIAL_LINKS.find(link => link.name === 'Email')
    if (emailLink) {
      const email = emailLink.username
      try {
        await navigator.clipboard.writeText(email)
        setCopiedEmail(true)
        toast({
          title: 'Email Copied!',
          description: 'Email address has been copied to your clipboard.',
          variant: 'success'
        })
        setTimeout(() => setCopiedEmail(false), 2000)
      } catch (error) {
        toast({
          title: 'Copy Failed',
          description: 'Unable to copy email address.',
          variant: 'destructive'
        })
      }
    }
  }

  return (
    <div className="space-y-4">
      {SOCIAL_LINKS.map((link, index) => {
        const IconComponent = iconMap[link.icon as keyof typeof iconMap]
        const isEmail = link.name === 'Email'

        return (
          <motion.div
            key={link.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors group"
          >
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <IconComponent className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">{link.name}</h3>
                <p className="text-sm text-muted-foreground">{link.username}</p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              {isEmail ? (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleEmailCopy}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  {copiedEmail ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              ) : (
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${link.name}`}
                  className="opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-md hover:bg-accent"
                >
                  <IconComponent className="h-4 w-4" />
                </a>
              )}
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}