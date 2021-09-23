import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Dropdown from './Dropdown';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });

  return (
    <>
      <nav
        className='flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono'
        role='navigation'
      >
        <Link href='/'>
          <a className='pl-8'>Navbar</a>
        </Link>
        <div className='px-4 cursor-pointer md:hidden' onClick={toggle}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </div>
        <div className='pr-8 md:block hidden'>
          <Link href='/'>
            <a className='px-4'>Home</a>
          </Link>
          <Link href='/'>
            <a className='px-4'>Menu</a>
          </Link>
          <Link href='/'>
            <a className='px-4'>About</a>
          </Link>
          <Link href='/'>
            <a className='px-4'>Contact</a>
          </Link>
        </div>
        <Dropdown isOpen={isOpen} toggle={toggle} />
      </nav>
    </>
  );
};

export default Navbar;
