import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

import MenuList from '../molecules/MenuList';
import Logo from '../atoms/Logo';

const MobileMenuBar = () => {
  const [nav, setNav] = useState(false);

  const hadleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className='text-[#b5cdf5] md:hidden' onClick={hadleNav}>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? `fixed left-0 top-0 h-full w-[80%] border-r border-r-[#1e293b] bg-[#0f172a] duration-500 ease-in-out`
            : 'fixed left-[-100%]'
        }
      >
        <Logo isMobile />
        <MenuList isMobile />
      </div>
    </>
  );
};

export default MobileMenuBar;
