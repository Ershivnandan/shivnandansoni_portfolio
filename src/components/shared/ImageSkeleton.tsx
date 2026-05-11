'use client'

interface ImageSkeletonProps {
  width?: string
  height?: string
  className?: string
  showInitials?: boolean
  initials?: string
}

export function ImageSkeleton({
  width = "w-full",
  height = "h-full",
  className = "",
  showInitials = false,
  initials = "SS"
}: ImageSkeletonProps) {
  return (
    <div className={`${width} ${height} ${className} bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl animate-pulse flex items-center justify-center`}>
      {showInitials && (
        <span className="text-2xl font-bold text-primary/40">
          {initials}
        </span>
      )}
      {!showInitials && (
        <div className="w-8 h-8 bg-primary/20 rounded-full animate-pulse"></div>
      )}
    </div>
  )
}