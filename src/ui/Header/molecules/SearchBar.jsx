import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
    return (
        <div className='flex items-center '>
            <FiSearch className='h-[33px] w-[30px] translate-x-8 rounded-[10px] bg-[#203048] p-2 text-[#b5cdf5]' />
            <input
                type='text'
                className='h-[35px] w-[70px] rounded-[10px] bg-[#203048] text-[#b5cdf5] outline-none transition-all duration-500 focus:w-[200px] focus:pl-8'
            />
        </div>
    );
};

export default SearchBar;
