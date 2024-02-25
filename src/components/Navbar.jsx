import { Link } from 'react-router-dom'

import Title from '../components/Title'
import ThemeSwitcher from './ThemeSwitcher'
import SearchInput from './SearchInput'

import logo from '../assets/images/logoxaturn.png'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <div className={`${styles.navbar}`}>
      <Link to="/">
        <img src={logo} alt="Logo" className={`${styles.navbar_logo}`} />
      </Link>
      <div className={`${styles.navbar_title} hidden sm:flex`}>
        <Title />
      </div>
      <div className={`${styles.navbar_actions}`}>
        <div className="hidden sm:hidden md:block">
          <SearchInput />
        </div>
        <ThemeSwitcher />
      </div>
    </div>
  )
}

export default Navbar
