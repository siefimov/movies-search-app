import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
    return (
        <div className='flex items-center '>
            <FiSearch className='text-[#b5cdf5] translate-x-8 bg-[#203048] p-2 w-[30px] h-[30px] rounded-[10px]' />
            <input
                type='text'
                className='outline-none rounded-[10px] w-[70px] h-[30px] focus:w-[200px] focus:pl-8 bg-[#203048] transition-all duration-500 text-[#b5cdf5]'
            />
        </div>
    );
};

export default SearchBar;
