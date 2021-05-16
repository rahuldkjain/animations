import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>animations | rahuldkjain</title>
        <meta
          name="animations"
          content="handcrafted animations by rahuldkjain"
        />
        <link rel="icon" type="image/png" href="/favicon-32x32.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://rahuldkjain.github.io">rahuldkjain</a>
        </h1>

        <p className={styles.description}>welcome to handcrafted animations</p>
      </main>

      {/* <footer className={styles.footer}></footer> */}
    </div>
  );
}
