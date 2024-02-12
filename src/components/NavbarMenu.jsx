import { Outlet } from 'react-router-dom'

import Menu from './Menu'
import Navbar from './Navbar'

import { createRoutes } from '../helpers'

const NavbarMenu = () => {
  const routes = createRoutes()

  return (
    <div className="flex flex-col h-screen">
      <div className="h-auto w-screen p-2 bg-[#d5d8e2] dark:bg-[#26262b]">
        <Navbar />
      </div>
      <div className="flex flex-row flex-grow">
        <div className="w-auto bg-[#d5d8e2a4] dark:bg-[#26262bd2]">
          <Menu routes={routes} />
        </div>
        <div className="flex-grow">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default NavbarMenu
