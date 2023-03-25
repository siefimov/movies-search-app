import React from 'react';
import { Outlet } from 'react-router-dom';

import SearchInput from '../molecules/SearchInput';

const Layout = () => {
    return (
        <>
            <header>
                <SearchInput />
            </header>
            <Outlet />
            <footer>footer</footer>
        </>
    );
};

export default Layout;
