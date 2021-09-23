import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const Dropdown = ({ isOpen, toggle }: { isOpen: boolean; toggle: any }) => {
  return (
    <div
      className={
        isOpen
          ? 'absolute top-16 w-full grid grid-rows-4 text-center items-center bg-blue-300 '
          : 'hidden'
      }
      onClick={toggle}
    >
      <Link href='/'>
        <a className='px-4 py-2 hover:bg-blue-400'>Home</a>
      </Link>
      <Link href='/'>
        <a className='px-4 py-2 hover:bg-blue-400'>Menu</a>
      </Link>
      <Link href='/'>
        <a className='px-4 py-2 hover:bg-blue-400'>About</a>
      </Link>
      <Link href='/'>
        <a className='px-4 py-2 hover:bg-blue-400'>Contact</a>
      </Link>
    </div>
  );
};

Dropdown.propTypes = {
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
};

export default Dropdown;
