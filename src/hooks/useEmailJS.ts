import { useState } from 'react'
import { sendEmail } from '@/lib/emailjs'
import type { ContactFormData, ContactFormState } from '@/types/contact'

export function useEmailJS() {
  const [state, setState] = useState<ContactFormState>({
    isLoading: false,
    isSuccess: false,
    error: null
  })

  const send = async (data: ContactFormData) => {
    setState({
      isLoading: true,
      isSuccess: false,
      error: null
    })

    try {
      await sendEmail(data)
      setState({
        isLoading: false,
        isSuccess: true,
        error: null
      })
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to send email'
      setState({
        isLoading: false,
        isSuccess: false,
        error: message
      })
    }
  }

  const reset = () => {
    setState({
      isLoading: false,
      isSuccess: false,
      error: null
    })
  }

  return {
    ...state,
    send,
    reset
  }
}