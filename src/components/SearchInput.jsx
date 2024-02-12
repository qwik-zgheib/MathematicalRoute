import React from 'react'

import { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchInput = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef(null)

  const toggleSearch = () => {
    setIsOpen(!isOpen)
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.width = `${inputRef.current.scrollWidth}px`
    }
  }, [inputValue])

  return (
    <div className="relative">
      {isOpen ? (
        <input
          ref={inputRef}
          type="text"
          className="border bg-[#b8b9c1] dark:bg-[#4c4e58] border-[#737684] dark:border-[#737684] rounded-full text-blue-900 dark:text-blue-200 outline-none pl-3 p-8 py-2 transition-all duration-300"
          value={inputValue}
          onChange={handleInputChange}
          autoFocus
        />
      ) : null}

      <FontAwesomeIcon
        icon={faSearch}
        className="absolute top-0 right-0 mt-3 mr-3 text-[#4c4e58] hover:text-[#5a03d5] dark:text-[#b8b9c1] hover:dark:text-[#bea6ff] cursor-pointer hover:scale-150 hover:animate-spin"
        onClick={toggleSearch}
      />
    </div>
  )
}

export default SearchInput
