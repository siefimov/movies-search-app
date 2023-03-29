import React from 'react';
import PropTypes from 'prop-types';

const MenuList = ({ isMobile, children }) => {
    return (
        <ul
            className={`flex gap-8 flex-auto  ${
                isMobile
                    ? 'flex-col pt-24 uppercase pl-12'
                    : 'pl-40 hidden md:flex '
            }`}
        >
            {children}
        </ul>
    );
};

MenuList.propTypes = {};

export default MenuList;
