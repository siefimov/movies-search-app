import React from 'react';

const SubMenuList = ({ children }) => {
    return (
        <div className='hidden peer-hover:flex hover:flex w-[200px] bg-[#1e293b]  flex-col drop-shadow-lg absolute top-6 rounded'>
            {children}
        </div>
    );
};

export default SubMenuList;
