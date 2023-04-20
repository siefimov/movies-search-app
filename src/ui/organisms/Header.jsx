import React, { useState } from 'react';

import { Logo } from '../atoms';
import { SearchBar, MobileMenuBar, MenuList } from '../molecules';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const setBgColor = isScrolled ? '#0f172a' : 'transparent';

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <header className={`header bg-[${setBgColor}]`}>
      <div className='relative mx-auto flex w-full max-w-[1240px] items-center justify-between'>
        <Logo />
        <MenuList />
        <SearchBar />
        <MobileMenuBar />
      </div>
    </header>
  );
};

export default Header;
