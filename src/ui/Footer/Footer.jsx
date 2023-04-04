import React from 'react';
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaLinkedin,
} from 'react-icons/fa';

import Logo from '../Header/atoms/Logo';

const Footer = () => {
  return (
    <footer className='mt-20 border-t-2 border-t-[#1e293b] bg-[#151f36] py-16 px-4 text-gray-300'>
      <div className='mx-auto flex flex-wrap max-w-[1192px] items-center justify-between px-5'>
        <div className='p-4'>
          <Logo />
          <h1 className='  text-3xl font-bold text-[#364051]'>REACT APP.</h1>
        </div>
        <blockquote className='flex flex-col justify-start p-4'>
          <span>Success is not the key to happiness.</span>
          <span>Happiness is the key to success. </span>
          <span>If you love what you are doing, you will be successful. </span>
          <span className='self-end text-sm text-[#b5cdf5] italic'>Albert Schweitzer</span>
        </blockquote>
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
      </div>
    </footer>
  );
};

export default Footer;
