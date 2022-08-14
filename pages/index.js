import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sprk</title>
        <meta content="Sprk" property="og:title" />
        <meta content="Edit videos, correct colorization, and add film effects, for free, in your own way, as soon as now." property="og:description" />
        <meta content="https://sprk.vercel.app/" property="og:url" />
    		<meta property="og:type" content="website" />
        <meta content="https://sprk.vercel.app/sprk.png" property="og:image" />
        <meta id="embed-color" content="#FA8128" data-react-helmet="true" name="theme-color" />
        <link rel="icon" href="/sprk_favicon.png" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <h1>Sprk</h1>
          <a href="https://replit.com/">Hosted On Replit</a>
        </div>
        <div className={styles.navbar}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/edit">Edit</a></li>
          </ul>
        </div>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
