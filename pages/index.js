import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>lorem ipsum dolor sit</p>
      <p className={styles.text}>lorem ipsum dolor sit</p>
      <Link href='/ninjas'>
        <p className={styles.btn}>See Ninja Listings</p>
      </Link>
    </div>
  )
}
