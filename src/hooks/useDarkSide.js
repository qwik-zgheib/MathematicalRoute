import { useState, useEffect } from 'react'

const useDarkSide = () => {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || 'light'
    } catch (error) {
      console.error('Error accessing localStorage:', error)
      return 'light'
    }
  })

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    try {
      localStorage.setItem('theme', newTheme)
    } catch (error) {
      console.error('Error accessing localStorage:', error)
    }
  }

  useEffect(() => {
    try {
      const root = window.document.documentElement
      root.classList.remove(theme === 'dark' ? 'light' : 'dark')
      root.classList.add(theme)

      localStorage.setItem('theme', theme)
    } catch (error) {
      console.error('Error accessing localStorage:', error)
    }
  }, [theme])

  return [theme, toggleTheme]
}

export default useDarkSide
