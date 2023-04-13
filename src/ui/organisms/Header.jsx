import React, { useState } from 'react';

import Logo from '../atoms/Logo';
import MenuItem from '../atoms/MenuItem';
import SubMenuItem from '../atoms/SubMenuItem';
import MenuList from '../molecules/MenuList';
import SubMenuList from '../molecules/SubMenuList';
import SearchBar from '../molecules/SearchBar';
import MobileMenuBar from '../molecules/MobileMenuBar';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const setBgColor = isScrolled ? '#0f172a' : 'transparent';

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <header
      className={`fixed top-0 z-20 w-full items-center justify-between p-4 transition-all duration-500 ease-in-out bg-[${setBgColor}] bg-gradient-to-t from-[transparent] to-[rgb(0,0,0,0.8)]`}
    >
      <div className='relative mx-auto flex w-full max-w-[1240px] items-center justify-between'>
        <Logo />
        <MenuList>
          <MenuItem to={'/'} value='Home' />
          <div className='relative flex flex-col'>
            <MenuItem to='/movies' value='Movies' peer='peer' />
            <SubMenuList>
              <SubMenuItem to={`/movies/popular`} value='Popular' />
              <SubMenuItem to={`/movies/upcoming`} value='Upcoming' />
              <SubMenuItem to={`/movies/top_rated`} value='Top Rated' />
            </SubMenuList>
          </div>
        </MenuList>
        <SearchBar />
        <MobileMenuBar />
      </div>
    </header>
  );
};

export default Header;
