import { FC } from 'react';
import Head from 'next/head';
import { Navbar } from '../Navbar';

import styles from '../../styles/Home.module.css';

interface Props extends FC {
  children: JSX.Element | JSX.Element[];
  title: string;
}

export const MainLayout = ({ title, children }: Props) => {
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
