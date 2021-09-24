import Head from 'next/head';
import React from 'react';
import PropTypes from 'prop-types';

const SeoMeta = ({ title, description }: any) => {
  return (
    <Head>
      <title>{title} | Daian Scuarissi</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name='description' content='' />
      <meta property='og:type' content='website' />
      <meta name='og:title' property='og:title' content='My Website' />
      <meta
        name='og:description'
        property='og:description'
        content='Come, join me in this adventure'
      />
      <meta property='og:site_name' content='' />
      <meta property='og:url' content='' />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content='Home | Daian Scuarissi' />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:site' content='@ASDaian' />
      <meta name='twitter:creator' content='@ASDaian' />
      <link rel='icon' type='image/png' href='/favicon.ico' />
      <link rel='apple-touch-icon' href='/favicon.ico' />
      <meta property='og:image' content='' />
      <meta name='twitter:image' content='' />
      <link rel='canonical' href='' />
    </Head>
  );
};

SeoMeta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default SeoMeta;
