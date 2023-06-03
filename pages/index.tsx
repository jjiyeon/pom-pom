import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Pom Pom App</title>
        <meta name="description" content="Pom Pom App<" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.container}>
            <div className={styles.header}>

            </div>
            <div className={styles.content}>
                content
            </div>
            <div className={styles.footer}>
                footer
            </div>
        </div>
      </main>

      {/*<footer className={styles.footer}>*/}
      {/*  <a*/}
      {/*    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Powered by{' '}*/}
      {/*    <span className={styles.logo}>*/}
      {/*      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />*/}
      {/*    </span>*/}
      {/*  </a>*/}
      {/*</footer>*/}
    </div>
  )
}

export default Home
