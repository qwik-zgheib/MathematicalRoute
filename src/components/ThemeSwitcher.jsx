import React from 'react'

import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import useDarkSide from '../hooks/useDarkSide'

const ThemeSwitcher = () => {
  const [theme, toggleTheme] = useDarkSide()

  return (
    <div className="flex items-center space-x-4 pr-3">
      <button className="text-gray-300 dark:text-gray-300 px-4 py-2 rounded" onClick={toggleTheme}>
        <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} className="ml-2" />
      </button>
    </div>
  )
}

export default ThemeSwitcher
