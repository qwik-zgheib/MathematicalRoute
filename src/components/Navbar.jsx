import React from 'react'
import styles from '../styles/Navbar.module.css'
import { Title } from './Title'
import { Outlet } from 'react-router-dom'
import { SearchInput } from '../components/Menu'
const Navbar = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className="Mode"></div>
          <div className="title">
            <Title />
          </div>
          <div className={styles.search}>
            <SearchInput className={styles.searchi} />
          </div>

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
