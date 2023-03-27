import React, { useState, useRef, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';

import Button from '../atoms/Button';
import Input from '../atoms/Input';

const SearchInput = () => {
    const [searchVisible, setSearchVisible] = useState(false);
    const [searchMovie, setSearchTerm] = useState('');
    const searchInputRef = useRef(null);

    useEffect(() => {
        if (searchVisible) {
            searchInputRef.current.focus();
        }
    }, [searchVisible]);

    const handleSearchClick = () => {
        setSearchVisible(true);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();

        setSearchTerm('');
        setSearchVisible(false);
    };

    return (
        <div className='bg-[#1e293b] py-2 px-3 rounded-lg flex items-center'>
            <FiSearch onClick={handleSearchClick} className="mr-2"/>
            {/* {!searchVisible && <FiSearch onClick={handleSearchClick} />} */}
            {searchVisible && (
                <form onSubmit={handleSearchSubmit}>
                    <input
                        type='text'
                        value={searchMovie}
                        onChange={handleSearchChange}
                        ref={searchInputRef}
                        className='outline-none bg-[#1e293b]'
                    />
                    {/* <Input
                        type='text'
                        placeholder='movie name...'
                        value={searchMovie}
                        onChange={handleSearchChange}
                        ref={searchInputRef}
                    /> */}
                    {/* <Button type='submit' text='Search' /> */}
                </form>
            )}
        </div>
    );
};

export default SearchInput;
