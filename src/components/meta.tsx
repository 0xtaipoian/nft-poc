import Head from 'next/head';
import React from 'react';

export interface MetaProps {
  lang?: string;
}

export const Meta: React.FC<MetaProps> = ({ lang = 'en' }) => (
  <Head>
    <title>NFT PoC</title>
    <meta
      content="width=device-width,user-scalable=no,initial-scale=1.0,maximum-scale=1.0"
      name="viewport"
    />
    <meta content="yes" name="apple-mobile-web-app-capable" />
    <meta content="black" name="apple-mobile-web-app-status-bar-style" />
    <meta content="true" name="HandheldFriendly" />
    <meta content={lang} httpEquiv="Content-Language" />
    <link href="/apple-icon-57x57.png" rel="apple-touch-icon" sizes="57x57" />
    <link href="/apple-icon-60x60.png" rel="apple-touch-icon" sizes="60x60" />
    <link href="/apple-icon-72x72.png" rel="apple-touch-icon" sizes="72x72" />
    <link href="/apple-icon-76x76.png" rel="apple-touch-icon" sizes="76x76" />
    <link href="/apple-icon-114x114.png" rel="apple-touch-icon" sizes="114x114" />
    <link href="/apple-icon-120x120.png" rel="apple-touch-icon" sizes="120x120" />
    <link href="/apple-icon-144x144.png" rel="apple-touch-icon" sizes="144x144" />
    <link href="/apple-icon-152x152.png" rel="apple-touch-icon" sizes="152x152" />
    <link href="/apple-icon-180x180.png" rel="apple-touch-icon" sizes="180x180" />
    <link href="/android-icon-192x192.png" rel="icon" sizes="192x192" type="image/png" />
    <link href="/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
    <link href="/favicon-96x96.png" rel="icon" sizes="96x96" type="image/png" />
    <link href="/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
    <link href="/manifest.json" rel="manifest" />
    <meta content="#ffffff" name="msapplication-TileColor" />
    <meta content="/ms-icon-144x144.png" name="msapplication-TileImage" />
    <meta content="#ffffff" name="theme-color" />
    <link href="https://fonts.gstatic.com" rel="preconnect" />
    <link
      href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap"
      rel="stylesheet"
    />
    <meta content="NFT Game PoC" name="description" />
    <meta content="/icons/icon-512x512.png" property="og:image" />
  </Head>
);
