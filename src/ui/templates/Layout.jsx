import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../organisms/Header';
import { Footer } from '../organisms/Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
