import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import Hero from '../components/Hero';
import SeoMeta from '../partials/seo-meta';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
        />
      </Head>
      <SeoMeta
        title='Home'
        description='Daian Scuarissi - Frontend developer'
      />
      <Hero />
    </>
  );
};

export default Home;
