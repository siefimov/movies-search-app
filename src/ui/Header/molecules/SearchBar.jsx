import React from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
    return (
        <div className='flex items-center '>
            <FiSearch className='text-[#b5cdf5]  translate-x-8' />
            <input
                type='text'
                className='outline-none rounded-[10px] w-[50px] h-[50px] p-6 focus:w-[300px] focus:pl-14 bg-[#203048] transition-all duration-500 text-[#b5cdf5]'
            />
        </div>
    );
};

export default SearchBar;
