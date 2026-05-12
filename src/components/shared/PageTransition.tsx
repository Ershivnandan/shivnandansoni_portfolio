'use client'

type PageTransitionProps = {
  children: React.ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <div className="min-h-screen w-full">
      {children}
    </div>
  )
}
