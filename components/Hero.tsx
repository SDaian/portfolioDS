import React from 'react';

const Hero = () => {
  return (
    <div className='bg-white h-screen flex flex-col justify-center items-center'>
      <h1 className='animate__animated animate__fadeInUp lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black text-center'>
        Hi, I&#39;m Daian Scuarissi.
      </h1>
      <h2 className='animate__animated animate__fadeInUp font-extralight lg:text-6xl md:text-4xl sm:text-2xl text-xl block'>
        Frontend Developer
      </h2>
      <div className='mt-6 cursor-pointer'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-16 w-16 animate-bounce'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M17 13l-5 5m0 0l-5-5m5 5V6'
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
