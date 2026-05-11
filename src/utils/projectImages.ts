// Project image management - Google Drive integration
export const getProjectImage = (projectId: string, fallbackImage: string): string => {
  // Environment variables for Google Drive project images
  const projectImages: Record<string, string> = {
    '1': process.env.NEXT_PUBLIC_PROJECT_1_DRIVE_ID || '', // Native AI Mobile App
    '2': process.env.NEXT_PUBLIC_PROJECT_2_DRIVE_ID || '', // 3D AI Assistant
    '3': process.env.NEXT_PUBLIC_PROJECT_3_DRIVE_ID || '', // Finance App
    '4': process.env.NEXT_PUBLIC_PROJECT_4_DRIVE_ID || '', // Wiraa Platform
    '5': process.env.NEXT_PUBLIC_PROJECT_5_DRIVE_ID || '', // Crop Analysis
    '6': process.env.NEXT_PUBLIC_PROJECT_6_DRIVE_ID || '', // Payment System
  }

  const driveId = projectImages[projectId]

  if (driveId) {
    return `https://drive.google.com/uc?id=${driveId}&export=download`
  }

  // Use the smart fallback system
  return fallbackImage
}