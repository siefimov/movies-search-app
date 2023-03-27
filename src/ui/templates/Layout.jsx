import React from 'react';
import { Outlet } from 'react-router-dom';

import Logo from '../atoms/Logo';
import SearchInput from '../molecules/SearchInput';
import NavList from '../molecules/NavList';
import NavItem from '../atoms/NavItem';

const Layout = () => {
    return (
        <div className='bg-[#0f172a]'>
            <header className='flex px-10 items-center justify-between py-4 bg-[#0f172a] text-slate-300'>
                <Logo />
                <NavList>
                    <NavItem to={'/'} value='Home' />
                    <NavItem to='/movies' value='Movies' />
                </NavList>
                <SearchInput />
            </header>
            <Outlet />
            <footer>footer</footer>
        </div>
    );
};

export default Layout;
