import { useLayoutEffect, useState } from 'react'
import { ThemeContext } from './themeContext'

const STORAGE_KEY = 'claytech-theme'

function getInitialDark() {
  if (typeof window === 'undefined') return false
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved === 'dark') return true
  if (saved === 'light') return false
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(getInitialDark)

  useLayoutEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem(STORAGE_KEY, 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem(STORAGE_KEY, 'light')
    }
  }, [dark])

  const toggle = () => setDark((d) => !d)

  return (
    <ThemeContext.Provider value={{ dark, toggle }}>{children}</ThemeContext.Provider>
  )
}
