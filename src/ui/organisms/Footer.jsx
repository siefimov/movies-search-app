import React from 'react';

import { Logo, Blockquote } from '../atoms';
import { SocialIcons } from '../molecules';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='p-4'>
          <Logo />
          <h2 className='text-3xl font-bold text-[#364051]'>REACT APP.</h2>
        </div>

        <Blockquote />
        <SocialIcons />
      </div>
    </footer>
  );
};
