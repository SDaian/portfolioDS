import React from 'react';

const Footer = () => {
  return (
    <div className='flex justify-center items-center h-16 bg-black text-white'>
      <span>
        Copyright © {new Date().getFullYear()} Daian Scuarissi. All rights
        reserved.
      </span>
    </div>
  );
};

export default Footer;
