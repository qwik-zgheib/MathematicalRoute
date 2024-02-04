import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import styles from '../styles/Navbar.module.css'
export const SearchInput = () => {
  return (
    <div className={styles.searchi}>
      <input type="text" className=" border bg-gray-100 hover:bg-gray-200 border-gray-300 rounded-full text-blue-900 outline-none" />
      <FontAwesomeIcon
        icon={faSearch}
        className="ml-[-25px] relative top-2 right-2 hover:bg-blue-400 hover:rounded-full p-2 text-yellow-700 hover:text-white"
      />
    </div>
  )
}

const Menu = () => {
  return (
    <div className="flex flex-col p-2 bg-[#D9C7A7] h-[100vh]">
      <div className="p-2">
        <p>Topics</p>
        <markdown>
        <markdown> <Link to="/funciones">Funciones</Link> </markdown>
        <markdown> <Link to="/limites">Limits</Link> </markdown>
        <Link to="/derivadas">Derivadas</Link> </markdown> 
        <markdown> <Link to="/integrales">Integrales</Link> </markdown>
        
      </div>
    </div>
  )
}

export default Menu
