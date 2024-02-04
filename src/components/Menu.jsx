import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { Limits } from './Limits'

const SearchInput = () => {
  return (
    <div className="items-center justify-center">
      <input type="text" className="p-2 border bg-gray-100 hover:bg-gray-200 border-gray-300 rounded-full text-blue-900 outline-none" />
      <FontAwesomeIcon
        icon={faSearch}
        className="ml-[-25px] relative top-2 right-2 hover:bg-blue-400 hover:rounded-full p-2 text-yellow-700 hover:text-white"
      />
    </div>
  )
}


const Menu = () => {
  return (
    <div className="flex flex-col p-2 bg-gray-50">
      <p className="text-red-900">The Mathematical Route</p>
      <SearchInput />

      <div className="p-2">
        <p>Topics</p>
        <Link to="/limites">Limits</Link>
        <Link to="/derivadas">derivadas</Link>
      </div>
    </div>
  )
}

export default Menu
