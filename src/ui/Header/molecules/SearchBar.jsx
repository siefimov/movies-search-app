import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineCloseCircle, AiOutlineClose } from 'react-icons/ai';

const SearchBar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleIsClicked = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div
      className='mr-2 flex items-center transition-all duration-1000 min-[320px]:top-[50px] sm:top-0'
      style={{
        position: isClicked ? 'absolute' : 'static',
        right: isClicked ? '2%' : 'none',
      }}
    >
      <FiSearch
        onClick={handleIsClicked}
        className='icon-search'
        style={{
          width: isClicked ? '0' : '34px',
          opacity: isClicked ? '0' : '1',
        }}
      />
      <AiOutlineCloseCircle
        onClick={() => setInputValue('')}
        className='h-[20px] w-[28px] translate-x-8 cursor-pointer text-slate-500 hover:text-[#38bdf8]'
        style={{ display: isClicked ? 'block' : 'none' }}
      />
      <input
        type='text'
        className='input-search '
        style={{
          width: isClicked ? '300px' : '0',
          paddingLeft: isClicked ? '40px' : '0',
        }}
        onChange={handleInputValue}
        value={inputValue}
        placeholder='search movie...'
      />
      <Link
        className='btn-search'
        style={{
          width: isClicked ? '70px' : '0',
          opacity: isClicked ? '1' : '0',
        }}
        to={`movies/search/${inputValue}`}
      >
        search
      </Link>
      <AiOutlineClose
        onClick={() => {
          handleIsClicked(), setInputValue('');
        }}
        className='translate-x-[-60px] cursor-pointer text-lg text-slate-200 hover:text-[#38bdf8]'
        style={{ display: isClicked ? 'block' : 'none' }}
      />
    </div>
  );
};

export default SearchBar;
