import React from 'react';
import { Outlet } from 'react-router-dom';

import Logo from '../atoms/Logo';
import SearchInput from '../molecules/SearchInput';
import NavList from '../molecules/NavList';
import NavItem from '../atoms/NavItem';

const Layout = () => {
    return (
        <>
            <header className='flex items-center justify-between py-4 bg-neutral-800 text-slate-300'>
                <Logo />
                <NavList>
                    <NavItem value='Home' />
                    <NavItem value='Movies' />
                </NavList>
                <SearchInput />
            </header>
            <Outlet />
            <footer>footer</footer>
        </>
    );
};

export default Layout;
