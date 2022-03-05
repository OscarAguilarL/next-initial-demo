import Head from 'next/head';
import Link from 'next/link';
import { Navbar } from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Oscar</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h1>Home Page</h1>
        <h2 className={styles.title}>
          Ir a <Link href="/about">About</Link>
        </h2>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
      </main>
    </div>
  );
}
