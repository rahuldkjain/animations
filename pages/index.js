import Head from "next/head";
import {Wrapper} from "../styles/Home.style"
import Animations from "../components/Animations";

export default function Home() {
  return (
    <Wrapper className="container">
      <Head>
        <title>animations | rahuldkjain</title>
        <meta
          name="animations"
          content="handcrafted animations by rahuldkjain"
        />
        <link rel="icon" type="image/png" href="/favicon-32x32.png" />
      </Head>

      <main className="main">
        <h1 className="title">
          <a href="https://rahuldkjain.github.io">rahuldkjain</a>
        </h1>
        <p className="description">welcome to handcrafted animations</p>
      </main>
      <section className="mediaContainer">
        <Animations />
      </section>

      {/* <footer className="footer"></footer> */}
    </Wrapper>
  );
}
