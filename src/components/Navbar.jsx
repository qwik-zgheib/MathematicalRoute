import React from 'react'
import styles from '../styles/Navbar.module.css'
import { Title } from './Title'
import { Outlet } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.box}>
          <Title />
          <ul className={styles.listabox}>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navbar
