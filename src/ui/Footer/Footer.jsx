import React from 'react';
import {
    FaFacebookSquare,
    FaInstagram,
    FaTwitterSquare,
    FaLinkedin,
} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='mt-20 border-t-2 border-t-[#1e293b] bg-[#151f36] py-16 px-4 text-gray-300'>
            <div className='mx-auto flex max-w-[940px] flex-col items-center px-4'>
                <h1 className='  text-3xl font-bold text-[#38bdf8]'>REACT.</h1>
                <p className='py-4 text-center'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
                    odit ullam iste repellat consequatur libero reiciendis,
                    blanditiis accusantium.
                </p>
                <div className='my-6 flex justify-center gap-4 md:w-[75%]'>
                    <a href='https://www.facebook.com/' target='_blank'>
                        <FaFacebookSquare
                            size={30}
                            className='hover:text-[#38bdf8]'
                        />
                    </a>
                    <a href='https://www.instagram.com/' target='_blank'>
                        <FaInstagram
                            size={30}
                            className='hover:text-[#38bdf8]'
                        />
                    </a>
                    <a href='https://twitter.com/home?lang=uk' target='_blank'>
                        <FaTwitterSquare
                            size={30}
                            className='hover:text-[#38bdf8]'
                        />
                    </a>
                    <a href='https://www.linkedin.com/feed/' target='_blank'>
                        <FaLinkedin
                            size={30}
                            className='hover:text-[#38bdf8]'
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
