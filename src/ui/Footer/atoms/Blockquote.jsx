import React from 'react';

const Blockquote = () => {
  return (
    <blockquote className='flex flex-col justify-start p-4'>
      <span>Success is not the key to happiness.</span>
      <span>Happiness is the key to success. </span>
      <span>If you love what you are doing, you will be successful. </span>
      <span className='self-end text-sm italic text-[#b5cdf5]'>
        Albert Schweitzer
      </span>
    </blockquote>
  );
};

export default Blockquote;
