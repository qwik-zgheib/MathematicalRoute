import { Link, Outlet } from 'react-router-dom'
import styles from '../styles/Navbar.module.css'

const Menu = () => {
  //esto se llevara aun archivo externo debido a que sera extenso, en temas de modularizacion y buenas practicas.
  const routes = [
    {
      name: 'Funciones',
      path: 'functions',
      routes: [{ name: 'Item 1', path: 'Subtema 1' }],
    },
    {
      name: 'Limites',
      path: 'limits',
      routes: [
        { name: 'Item 1', path: 'Subtema 1' },
        { name: 'Item 2', path: 'Subtema 2' },
        { name: 'Item 3', path: 'Subtema 3' },
      ],
    },
    {
      name: 'Derivadas',
      path: 'derivatives',
      routes: [
        { name: 'Item 1', path: 'Subtema 1' },
        { name: 'Item 2', path: 'Subtema 2' },
        { name: 'Item 3', path: 'Subtema 3' },
        { name: 'Item 4', path: 'Subtema 4' },
      ],
    },
    {
      name: 'Integrales',
      path: 'integrals',
      routes: [{ name: 'Item 1', path: 'Subtema 1' }],
    },
  ]

  return (
    <div className="flex flex-row">
      <div className={styles.menu}>
        <div className="flex flex-col p-2">
          <ul className={`list-none pl-4`}>
            {routes.map(({ name, path, routes: subRoutes }) => (
              <li
                className={`text-nowrap font-medium hover:font-semibold text-gray-700 hover:text-indigo-500 transition duration-300 ease-in-out`}
                key={name}
              >
                <Link to={path}>{name}</Link>

                {subRoutes && (
                  <ul className={`list-none pl-4 mt-1`}>
                    {subRoutes.map(({ name: subName, path: subPath }) => (
                      <li className={`text-nowrap text-sm text-gray-500 hover:text-indigo-500 transition duration-300 ease-in-out`} key={subName}>
                        <Link to={subPath}>{subName}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default Menu
