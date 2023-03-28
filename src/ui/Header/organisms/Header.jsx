import React, { useState, useEffect } from 'react';

import HeaderContainer from './HeaderContainer';
import Logo from '../atoms/Logo';
import MenuList from '../molecules/MenuList';
import MenuItem from '../atoms/MenuItem';
import SearchBar from '../molecules/SearchBar';

const Header = () => {
    const [isDark, setIsDark] = useState(false);

    const handleHeaderBackground = () => {
        if (window.screenY > 100) {
            setIsDark(true);
        } else {
            setIsDark(false);
        }
    };

    useEffect(() => {
        // handleHeaderBackground();
        window.addEventListener('scroll', handleHeaderBackground);

        return () => {
            window.removeEventListener('scroll', handleHeaderBackground);
        };
    }, []);

    return (
        <HeaderContainer bgColor={isDark}>
            {/* <header className='flex px-10 items-center justify-between py-4 bg-[#0f172a] text-slate-300 border-b border-b-slate-700'> */}
            <Logo />
            <MenuList>
                <MenuItem to={'/'} value='Home' />
                <MenuItem to='/movies' value='Movies' />
            </MenuList>
            {/* <SearchInput /> */}
            <SearchBar />
            {/* </header> */}
        </HeaderContainer>
    );
};

export default Header;
