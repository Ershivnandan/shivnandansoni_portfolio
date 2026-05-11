import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollIndicator } from '@/components/home/ScrollIndicator'
import { CustomCursor } from '@/components/shared/CustomCursor'
import { Toaster } from '@/components/ui/toaster'
import { PageTransition } from '@/components/shared/PageTransition'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shivnandan Soni - Software Developer Engineer',
  description: 'Software Developer Engineer with 2+ years of experience building scalable mobile and web applications using React Native, React.js, Node.js, and Python. Specializing in AI-driven applications and payment integrations.',
  keywords: ['Software Developer Engineer', 'React Native', 'React.js', 'Node.js', 'Python', 'AI Applications', 'Mobile Developer', 'Payment Integration'],
  authors: [{ name: 'Shivnandan Soni' }],
  icons: {
    icon: '/portfolio.ico',
    shortcut: '/portfolio.ico',
    apple: '/portfolio.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shivnandansoni.dev',
    siteName: 'Shivnandan Soni',
    title: 'Shivnandan Soni - Software Developer Engineer',
    description: 'Software Developer Engineer with 2+ years of experience building scalable mobile and web applications using React Native, React.js, Node.js, and Python.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shivnandan Soni - Software Developer Engineer',
    description: 'Software Developer Engineer specializing in React Native, Python, and AI-driven applications.',
    creator: '@shivnandansoni',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
          disableTransitionOnChange={false}
          themes={['light', 'dark', 'midnight', 'graphite']}
        >
          <ScrollIndicator />
          <CustomCursor />
          <Navbar />
          <main className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
