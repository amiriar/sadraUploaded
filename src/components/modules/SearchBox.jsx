import React, { useState } from 'react';
import './SearchBox.css';
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const SearchBox = ({ firstWidth }) => {
  const [selectedOption, setSelectedOption] = useState('classes'); // Default selected option (English value)
  const [inputValue, setInputValue] = useState('');

  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`/search?option=${selectedOption}&value=${inputValue}`);
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  }

  return (
    <div className="search_Container" style={{ width: firstWidth }} dir='ltr' >
      <button className='search_Btn' onClick={clickHandler}><FaSearch className='search-icon' /></button>
      <div>
        <select className='select_options' onChange={handleSelectChange} value={selectedOption}>
          <option value="classes">کلاس ها</option>
          <option value="events">رویداد ها</option>
          <option value="blog">بلاگ ها</option>
        </select>
      </div>

      <input className='search_input' placeholder='جستجو دوره‌ها، مربیان و رخدادها' type='text' onChange={handleInputChange} value={inputValue} />
    </div>
  );
}

export default SearchBox;
