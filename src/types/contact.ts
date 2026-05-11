export type ContactFormData = {
  name: string
  email: string
  subject: string
  message: string
}

export type ContactFormState = {
  isLoading: boolean
  isSuccess: boolean
  error: string | null
}

export type SocialLink = {
  name: string
  url: string
  icon: string
  username: string
}