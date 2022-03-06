import React from 'react';
import Head from 'next/head';
import { Navbar } from '../Navbar';

import styles from '../../styles/Home.module.css';

export const MainLayout = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title} - Oscar</title>
        <meta name="description" content={`${title} page`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>{children}</main>
    </div>
  );
};
