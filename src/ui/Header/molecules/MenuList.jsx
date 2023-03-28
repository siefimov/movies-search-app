import React from 'react';
import PropTypes from 'prop-types';

const MenuList = ({ children }) => {
    return <ul className='flex gap-8'>{children}</ul>;
};

MenuList.propTypes = {};

export default MenuList;
