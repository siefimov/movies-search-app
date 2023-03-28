import React from 'react';

const HeaderContainer = ({ bgColor, children }) => {
    const setBgColor = ({ isDark }) => (isDark ? '#171e31' : 'transparent');

    return (
        <div
            className={`flex justify-between items-center bg-[#171e31] p-4 fixed top-0 w-full transition-all z-20 border-b border-b-slate-700 ${setBgColor}`}
        >
            {children}
        </div>
    );
};

export default HeaderContainer;
