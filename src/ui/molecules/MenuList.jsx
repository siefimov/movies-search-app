import React from 'react';
import PropTypes from 'prop-types';

import { MenuItem, SubMenuItem } from '../atoms';

export const MenuList = ({ isMobile }) => {
  return (
    <ul
      className={`flex flex-auto gap-8  ${
        isMobile ? 'flex-col pt-24 pl-12 uppercase' : 'hidden pl-28 md:flex'
      }`}
    >
      <MenuItem to={'/'} value='Home' />
      <div className='relative flex flex-col'>
        <MenuItem to='/movies' value='Movies' peer='peer' />
        <div className='absolute top-6 hidden w-[200px] flex-col rounded bg-[#1e293b] drop-shadow-lg peer-hover:flex hover:flex'>
          <SubMenuItem to={`/movies/popular`} value='Popular' />
          <SubMenuItem to={`/movies/upcoming`} value='Upcoming' />
          <SubMenuItem to={`/movies/top_rated`} value='Top Rated' />
        </div>
      </div>
    </ul>
  );
};

MenuList.propTypes = {
  isMobile: PropTypes.bool,
};

MenuList.defaultProps = {
  isMobile: false,
};
