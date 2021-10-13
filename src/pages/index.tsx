import Head from 'next/head';
import React from 'react';

import { HomePage } from './HomePage/HomePage';

export default function Home() {
  return (
    <div>
      <Head>
        <title>World Trip</title>
        <meta name='description' content='Generated by create next app' />
      </Head>

      <HomePage />
    </div>
  );
}
