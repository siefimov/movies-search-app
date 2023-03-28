import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header/organisms/Header';

const Layout = () => {
    return (
        <div className='bg-[#0f172a]'>
            <Header />
            <Outlet />
            <footer>footer</footer>
        </div>
    );
};

export default Layout;
