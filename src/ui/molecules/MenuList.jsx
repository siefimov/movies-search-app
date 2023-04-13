import React from 'react';
import PropTypes from 'prop-types';

import MenuItem from '../atoms/MenuItem';
import SubMenuItem from '../atoms/SubMenuItem';
import SubMenuList from '../molecules/SubMenuList';

const MenuList = ({ isMobile }) => {
  return (
    <ul
      className={`flex flex-auto gap-8  ${
        isMobile ? 'flex-col pt-24 pl-12 uppercase' : 'hidden pl-28 md:flex'
      }`}
    >
      <MenuItem to={'/'} value='Home' />
      <div className='relative flex flex-col'>
        <MenuItem to='/movies' value='Movies' peer='peer' />
        <SubMenuList>
          <SubMenuItem to={`/movies/popular`} value='Popular' />
          <SubMenuItem to={`/movies/upcoming`} value='Upcoming' />
          <SubMenuItem to={`/movies/top_rated`} value='Top Rated' />
        </SubMenuList>
      </div>
    </ul>
  );
};

MenuList.propTypes = {};

export default MenuList;
