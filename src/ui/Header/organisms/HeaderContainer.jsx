import React from 'react';

const HeaderContainer = ({ bgColor, children }) => {
    const setBgColor = bgColor ? '#0f172a' : 'transparent';

    return (
        <div
            className={`fixed top-0 z-20 flex w-full items-center justify-between p-4 transition-all ease-in-out duration-500 bg-[${setBgColor}] bg-gradient-to-t from-[transparent] to-[rgb(0,0,0,0.8)]`}
        >
            {children}
        </div>
    );
};

export default HeaderContainer;
// bg-gradient-to-t from-[transparent] to-[rgb(0,0,0,0.8)]