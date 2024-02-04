import React from 'react'
import { Outlet } from 'react-router-dom'

const Title = () => {
  return <h1 className="text-red-700">THΞ MΔTHEMΔTICΔL RΘUTΞ</h1>
}

const Navbar = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <div>left</div>
        <div className="title">
          <Title />
        </div>
        <div>right</div>
      </div>
      <Outlet />
    </div>
  )
}

export default Navbar
