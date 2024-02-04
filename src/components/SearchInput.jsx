import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
export const SearchInput = () => {
  return (
    <div>
      <input
        type="text"
        className=" absolute right-[20vw] top-2.5 border bg-gray-100 hover:bg-gray-200 border-gray-300 rounded-full text-blue-900 outline-none"
      />
      <FontAwesomeIcon
        icon={faSearch}
        className=" absolute top-2 right-[20vw] hover:bg-[#ad0909] hover:rounded-full p-2 text-yellow-700 hover:text-white cursor-pointer"
      />
    </div>
  )
}
