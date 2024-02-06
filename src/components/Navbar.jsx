import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from '../styles/Navbar.module.css'
import Title from '../components/Title'
import { SearchInput } from './SearchInput'
import ThemeSwitcher from './ThemeSwitcher'

const Navbar = () => {
  return (
    <div>
      <div className={`${styles.container} bg-[#011526] dark:bg-[#011526]`}>
        <div>
          <img className={styles.image} src="/src/assets/images/logoxaturn.png" />
        </div>

        <div className="title">
          <Title />
        </div>

        <div>
          <SearchInput />
          <ThemeSwitcher />
        </div>
      </div>

      <Outlet />
    </div>
  )
}

export default Navbar
