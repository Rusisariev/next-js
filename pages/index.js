import Head from "next/head";
import styles from "../sass/Home.module.scss";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>RUSLAN</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/youtubetwo.ico" />
        <link
          rel="preload"
          href="/fonts/MatrixCodeNfi-YPPj.otf"
          as="font"
          crossOrigin=""
        />
      </Head>

      <Header />
      <main className="main"></main>
      <Footer />
    </div>
  );
}
