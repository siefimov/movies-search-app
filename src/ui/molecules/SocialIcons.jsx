import React from 'react';
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaLinkedin,
} from 'react-icons/fa';

export const SocialIcons = () => {
  return (
    <div className=' flex justify-center gap-4 p-4'>
      <a href='https://www.facebook.com/' target='_blank'>
        <FaFacebookSquare size={30} className='hover:text-[#38bdf8]' />
      </a>
      <a href='https://www.instagram.com/' target='_blank'>
        <FaInstagram size={30} className='hover:text-[#38bdf8]' />
      </a>
      <a href='https://twitter.com/home?lang=uk' target='_blank'>
        <FaTwitterSquare size={30} className='hover:text-[#38bdf8]' />
      </a>
      <a href='https://www.linkedin.com/feed/' target='_blank'>
        <FaLinkedin size={30} className='hover:text-[#38bdf8]' />
      </a>
    </div>
  );
};
