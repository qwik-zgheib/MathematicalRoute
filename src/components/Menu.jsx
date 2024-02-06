import { Link, Outlet } from 'react-router-dom'

import { createRoutes } from '../helpers'

import styles from '../styles/Navbar.module.css'

const Menu = () => {
  const routes = createRoutes()

  return (
    <div className="flex flex-row">
      <div className={`${styles.menu} bg-[#d9c7a7] dark:bg-[#011826]`}>
        <div className="flex flex-col p-2">
          <p className="text-2xl text-[#ad0909]">Temas</p>
          <ul className={`list-none pl-4`}>
            {Object.values(routes).map(({ name, path, routes: subRoutes }) => (
              <li className={`text-nowrap transition duration-300 ease-in-out`} key={name}>
                <Link className="font-medium hover:font-semibold text-gray-700 hover:text-indigo-500" to={path}>
                  {name}
                </Link>

                {subRoutes && (
                  <ul className={`list-none pl-4 mt-1`}>
                    {subRoutes.map(({ name: subName, path: subPath }) => (
                      <li className={`text-nowrap text-sm text-gray-500 hover:text-indigo-500 transition duration-300 ease-in-out`} key={subName}>
                        <Link to={`${path}/${subPath}`}>{subName}</Link>
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
