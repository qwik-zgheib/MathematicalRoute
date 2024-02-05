import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from '../styles/Navbar.module.css'
import Title from '../components/Title'
import { SearchInput } from './SearchInput'

const Navbar = () => {
  return (
    <div>
      <div className={styles.container}>
        <div>
          <img className={styles.image} src="/src/assets/images/logoxaturn.png" />
        </div>
        <div className="title">
          <Title />
        </div>
        <div>
          <SearchInput />
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default Navbar
