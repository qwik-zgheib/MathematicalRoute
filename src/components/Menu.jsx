import { Link, Outlet } from 'react-router-dom'
import styles from '../styles/Navbar.module.css'

const Menu = () => {
  return (
    <div className="flex flex-row">
      <div className={styles.menu}>
        <div className="p-2">
          <p>Topics</p>
          <ul>
            <li>
              <Link to="/funciones">Funciones</Link>
            </li>
            <li>
              <Link to="/limites">Limits</Link>
            </li>
            <li>
              <Link to="/derivadas">Derivadas</Link>
            </li>
            <li>
              <Link to="/integrales">Integrales</Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default Menu
