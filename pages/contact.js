import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { Navbar } from '../components/Navbar';
import styles from '../styles/Home.module.css';

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact - Oscar</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h1>Contact Page</h1>

        <h2 className={styles.title}>
          Ir a <Link href="/">Home</Link>
        </h2>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/contact.js</code>
        </p>
      </main>
    </div>
  );
};

export default ContactPage;
