import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

const Menu = ({ routes }) => {
  return (
    <div className="p-2 overflow-y-auto">
      <ul className="space-y-3">
        {Object.values(routes).map(({ name, path, routes: subRoutes }) => (
          <li key={name}>
            <Link
              to={path}
              className="block py-1 px-4 rounded-md font-bold text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              {name}
            </Link>

            {subRoutes && (
              <ul className="ml-4 space-y-1">
                {subRoutes.map(({ name: subName, path: subPath }) => (
                  <li key={subName}>
                    <Link
                      to={`${path}/${subPath}`}
                      className="block px-4 rounded-md font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 text-nowrap transition-colors duration-200"
                    >
                      {subName}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

Menu.propTypes = {
  routes: PropTypes.object.isRequired,
}

export default Menu
