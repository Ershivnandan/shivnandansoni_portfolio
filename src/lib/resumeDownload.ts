const resumeFileId = process.env.NEXT_PUBLIC_RESUME_DRIVE_ID!

export function getResumeDownloadUrl(): string {
  if (!resumeFileId) {
    throw new Error('Resume Drive file ID is not configured')
  }
  return `https://drive.google.com/uc?export=download&id=${resumeFileId}`
}

export async function downloadResume(): Promise<void> {
  try {
    const url = getResumeDownloadUrl()
    const link = document.createElement('a')
    link.href = url
    link.target = '_blank'
    link.rel = 'noopener noreferrer'
    link.download = 'Shivnandan_Soni_Resume.pdf'

    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  } catch (error) {
    console.error('Resume download error:', error)
    throw new Error('Failed to download resume. Please try again.')
  }
}