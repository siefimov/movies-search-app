import React, { useState, useRef, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';

import Button from '../atoms/Button';

const SearchInput = () => {
    const [searchVisible, setSearchVisible] = useState(false);
    const [searchMovie, setSearchTerm] = useState('');
    const searchInputRef = useRef(null);
    console.log({ searchVisible });
    console.log({ searchMovie });
    console.log(searchInputRef.current);

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
        <div>
            {!searchVisible && <FiSearch onClick={handleSearchClick} />}
            {searchVisible && (
                <form onSubmit={handleSearchSubmit}>
                    <input
                        type='text'
                        value={searchMovie}
                        onChange={handleSearchChange}
                        ref={searchInputRef}
                        className='pl-2 outline-none border rounded-lg py-2'
                    />
                    <Button type='submit' text='Search' />
                </form>
            )}
        </div>
    );
};

export default SearchInput;
