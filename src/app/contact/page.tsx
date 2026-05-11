import type { Metadata } from 'next'
import { ContactForm } from '@/components/contact/ContactForm'
import { SocialLinks } from '@/components/contact/SocialLinks'
import { AvailabilityBadge } from '@/components/contact/AvailabilityBadge'
import { SectionWrapper } from '@/components/shared/SectionWrapper'

export const metadata: Metadata = {
  title: 'Contact - Shivnandan Soni',
  description: 'Get in touch with Shivnandan Soni for collaboration opportunities, project discussions, or just to say hello.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrapper>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
              Let's Work Together
            </h1>
            <p className="text-xl text-muted-foreground mb-6 text-pretty">
              Have a project in mind or just want to chat about technology?
              I'd love to hear from you.
            </p>
            <AvailabilityBadge />
          </div>
        </SectionWrapper>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <SectionWrapper delay={0.1}>
              <ContactForm />
            </SectionWrapper>

            <SectionWrapper delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    Other Ways to Connect
                  </h2>
                  <p className="text-muted-foreground mb-6 text-pretty">
                    Feel free to reach out through any of these platforms.
                    I'm always happy to connect with fellow developers and potential collaborators.
                  </p>
                </div>

                <SocialLinks />

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Location
                  </h3>
                  <p className="text-muted-foreground">
                    Based in Gurugram, Haryana, India
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Available for remote work worldwide
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Response Time
                  </h3>
                  <p className="text-muted-foreground">
                    I typically respond within 12-24 hours
                  </p>
                </div>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </div>
    </div>
  )
}