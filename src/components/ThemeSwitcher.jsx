import React from 'react'
import useDarkSide from '../hooks/useDarkSide'

const ThemeSwitcher = () => {
  const [theme, toggleTheme] = useDarkSide()

  return (
    <div className="flex items-center space-x-4">
      <button className="text-gray-800 dark:text-gray-300 px-4 py-2 rounded" onClick={toggleTheme}>
        {theme === 'dark' ? 'Light' : 'Dark'}
      </button>
    </div>
  )
}

export default ThemeSwitcher
