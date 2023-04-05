import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header/organisms/Header';
import Footer from '../Footer/Footer';

import SearchContext from '../../context/SearchContext';

const Layout = () => {
  const [query, setQuery] = useState('see');

  return (
    <SearchContext.Provider value={{ query, setQuery }}>
      <Header />
      <Outlet />
      <Footer />
    </SearchContext.Provider>
  );
};

export default Layout;
