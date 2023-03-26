import React from 'react';
import PropTypes from 'prop-types';

const NavList = ({ children }) => {
    return <ul className='flex gap-8'>{children}</ul>;
};

NavList.propTypes = {};

export default NavList;
