import React from 'react';
import PropTypes from 'prop-types';

import Footer from './Footer';
import Navbar from './Navbar';
import SeoMeta from '../partials/seo-meta';

export default function Layout({ children }: { children: any }) {
  return (
    <>
      <SeoMeta
        title='Home'
        description='Daian Scuarissi - Frontend developer'
      />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.element,
};
