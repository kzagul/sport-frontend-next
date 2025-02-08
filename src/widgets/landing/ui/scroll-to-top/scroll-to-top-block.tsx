'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/shared/ui'
import { ArrowUp } from 'lucide-react'
import { mdiAppleKeyboardControl } from '@mdi/js'

export const ScrollToTopBlock = () => {
  const [showTopBtn, setShowTopBtn] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true)
      } else {
        setShowTopBtn(false)
      }
    })
  }, [])

  const goToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
    })
  }

  return (
    <>
      {showTopBtn && (
        <Button
          onClick={goToTop}
          className="fixed bottom-4 right-4 flex items-center justify-center rounded-full opacity-70 shadow-md transition-all duration-300 hover:opacity-90"
          size="icon"
        >
          {/* <ArrowUp className="h-4 w-4" /> */}
          <svg
            className="h-8 w-8 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d={mdiAppleKeyboardControl} fill="currentColor" />
          </svg>
        </Button>
      )}
    </>
  )
}
