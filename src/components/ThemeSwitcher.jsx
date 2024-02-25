import React from 'react'

import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import useDarkSide from '../hooks/useDarkSide'

const ThemeSwitcher = () => {
  const [theme, toggleTheme] = useDarkSide()

  return (
    <button
      className="text-[#4c4e58] hover:text-[#5a03d5] dark:text-[#b8b9c1] hover:dark:text-[#bea6ff] border-none p-2 justify-center hover:scale-150 hover:animate-spin"
      onClick={toggleTheme}
    >
      <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} className="text-xl" />
    </button>
  )
}

export default ThemeSwitcher
