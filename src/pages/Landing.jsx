import React from 'react'
import ThemeSwitcher from '../components/ThemeSwitcher'
import { Link } from 'react-router-dom'
import Title from '../components/Title'
import logo from '../assets/images/logoxaturn.png'

const LandingPage = () => {
  return (
    <div className="bg-[#d5d8e2] dark:bg-[#26262b] min-h-screen flex flex-col justify-center items-center">
      <div className="flex items-center p-5 m-5">
        <img src={logo} alt="Logo" className="w-40 h-40 animate-spin" />
      </div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">
        <Title />
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-center mb-12 text-gray-700 dark:text-gray-300">
        Aprende sobre funciones, límites, derivadas e integrales.
      </p>
      <Link
        to="/home"
        className="bg-[#4c4e58] dark:bg-[#737684] hover:bg-[#3c3d44] text-[#b8b9c1] dark:text-[#26262b] text-2xl font-bold py-2 px-6 rounded-full overflow-hidden transition-colors duration-300 hover:animate-pulse"
      >
        Comenzar
      </Link>
      <ThemeSwitcher />
    </div>
  )
}

export default LandingPage
