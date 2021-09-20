import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const a = {
    a:    'felipe',
    aoeu: 'pepe',
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="A boilerplate for React" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        Main 🚧
      </main>

      <footer className={styles.footer}>
        footer 🚧
      </footer>
    </div>
  )
}
