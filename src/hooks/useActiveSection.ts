import { useState, useEffect } from 'react'

export function useActiveSection(sections: string[]) {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    function updateActiveSection() {
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            return
          }
        }
      }

      if (window.scrollY < 100) {
        setActiveSection('')
      }
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
    }
  }, [sections])

  return activeSection
}