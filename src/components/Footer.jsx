import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className='bg-gray-900 text-white text-center py-6'>
        <p>&copy; 2025 MyWebsite. All Rights Reserved.</p>
        <div className='flex justify-center space-x-6 mt-4'>
          <a href="#" className='flex items-center space-x-1 text-blue-400 hover:text-blue-600'>
            <FaFacebook />
            <span>Facebook</span>
          </a>
          <a href="#" className='flex items-center space-x-1 text-blue-400 hover:text-blue-600'>
            <FaTwitter />
            <span>Twitter</span>
          </a>
          <a href="#" className='flex items-center space-x-1 text-blue-400 hover:text-blue-600'>
            <FaInstagram />
            <span>Instagram</span>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
