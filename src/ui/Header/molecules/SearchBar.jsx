import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const SearchBar = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleIsClicked = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className='flex items-center '>
      <FiSearch
        onClick={handleIsClicked}
        className='h-[32px] w-[30px] translate-x-8 cursor-pointer rounded-full border border-slate-500 bg-[#203048] px-2 py-1 text-[#b5cdf5]'
        style={{ display: isClicked ? 'none' : 'block' }}
      />
      <AiOutlineCloseCircle
        onClick={handleIsClicked}
        className='h-[20px] w-[28px] translate-x-8 cursor-pointer  text-slate-500 hover:text-[#38bdf8]'
        style={{ display: isClicked ? 'block' : 'none' }}
      />
      <input
        type='text'
        className='h-[35px] rounded-[10px] bg-[#203048] text-[#b5cdf5] outline-none transition-all duration-500 focus:w-[200px] focus:pl-10'
        style={{ width: isClicked ? '300px' : '0px' }}
      />
      <button
        className='h-[33px] w-[70px] translate-x-[-70px] cursor-pointer rounded-[10px] border border-slate-500 bg-[#203048] py-2 leading-none text-[#b5cdf5] transition-all duration-500 hover:bg-[#0f172a]'
        style={{
          width: isClicked ? '70px' : '0px',
          opacity: isClicked ? '1' : '0',
        }}
      >
        search
      </button>
    </div>
  );
};

export default SearchBar;
