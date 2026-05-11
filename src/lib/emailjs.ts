import emailjs from '@emailjs/browser'
import type { ContactFormData } from '@/types/contact'

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!

if (!serviceId || !templateId || !publicKey) {
  console.warn('EmailJS environment variables are not configured')
}

export async function sendEmail(data: ContactFormData): Promise<void> {
  try {
    await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_name: 'Shivnandan Soni',
        reply_to: data.email,
      },
      publicKey
    )
  } catch (error) {
    console.error('EmailJS error:', error)
    throw new Error('Failed to send email. Please try again.')
  }
}
