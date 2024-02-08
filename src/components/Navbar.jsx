import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from '../styles/Navbar.module.css'
import Title from '../components/Title'
import { SearchInput } from './SearchInput'
import ThemeSwitcher from './ThemeSwitcher'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <div className={`${styles.container} bg-[#011526] dark:bg-[#011526]`}>
        <div className={styles.config}>
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
        <div className={styles.navegar}>
          <ul className={styles.lista}>
            <Link to="/functions">
              <li className={styles.subl}>Funciones</li>
            </Link>

            <Link to="/limits">
              <li className={styles.subl}>Limites</li>
            </Link>

            <Link to="/derivatives">
              <li className={styles.subl}>Derivadas</li>
            </Link>

            <Link to="/integrals">
              <li className={styles.subl}>Integrales</li>
            </Link>
          </ul>
        </div>
      </div>

      <Outlet />
    </div>
  )
}

export default Navbar
