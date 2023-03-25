import React, { useState, useRef, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

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
        <div>
            {!searchVisible && <FaSearch onClick={handleSearchClick} />}
            {searchVisible && (
                <form onSubmit={handleSearchSubmit}>
                    <input
                        type='text'
                        value={searchMovie}
                        onChange={handleSearchChange}
                        ref={searchInputRef}
                    />
                    <button type='submit'>Search</button>
                </form>
            )}
        </div>
    );
};

export default SearchInput;
