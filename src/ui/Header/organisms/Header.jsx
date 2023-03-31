import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import HeaderContainer from './HeaderContainer';
import Logo from '../atoms/Logo';
import MenuList from '../molecules/MenuList';
import MenuItem from '../atoms/MenuItem';
import SubMenuList from '../molecules/SubMenuList';
import SubMenuItem from '../atoms/SubMenuItem';
import SearchBar from '../molecules/SearchBar';
import MobileMenuBar from '../molecules/MobileMenuBar';

const Header = () => {
    const { category } = useParams();

    const [isDark, setIsDark] = useState(false);

    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    return (
        <HeaderContainer bgColor={isScrolled}>
            <Logo />
            <MenuList>
                <MenuItem to={'/'} value='Home' />
                <div className='relative flex flex-col'>
                    <MenuItem to='/movies' value='Movies' peer='peer' />
                    <SubMenuList>
                        <SubMenuItem to={`/movies/popular`} value='Popular' />
                        <SubMenuItem to={`/movies/upcoming`} value='Upcoming' />
                        <SubMenuItem
                            to={`/movies/top_rated`}
                            value='Top Rated'
                        />
                    </SubMenuList>
                </div>
            </MenuList>
            <SearchBar />
            <MobileMenuBar />
        </HeaderContainer>
    );
};

export default Header;
