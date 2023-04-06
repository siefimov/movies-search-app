import React from 'react';

const SubMenuList = ({ children }) => {
  return (
    <div className='absolute top-6 hidden w-[200px] flex-col rounded bg-[#1e293b] drop-shadow-lg peer-hover:flex hover:flex'>
      {children}
    </div>
  );
};

export default SubMenuList;
