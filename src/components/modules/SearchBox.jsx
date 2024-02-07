import React from 'react'

import './SearchBox.css'
import { FaSearch } from "react-icons/fa";

const SearchBox = ({firstWidth}) => {
  return (
    <>
    <div className="search_Container" style={{width:firstWidth}} dir='ltr' >
        <button className='search_Btn'><FaSearch  className='search-icon' /></button>
        <div>
          <select className='select_options'>
            <option>دوره‌ها</option>
            <option>test</option>
            <option>test</option>
          </select>
        </div>

        <input className='search_input' placeholder='جستجو دوره‌ها، مربیان و رخدادها' type='text' />
    </div>
    </>
  )
}

export default SearchBox
