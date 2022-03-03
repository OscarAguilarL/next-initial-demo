/* eslint-disable @next/next/no-html-link-for-pages */
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About - Oscar</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Ir a <a href="/">Home</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/about.js</code>
        </p>
      </main>
    </div>
  )
}

export default AboutPage
