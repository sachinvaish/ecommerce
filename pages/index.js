import Head from "next/head";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <>
      <Head>
        <title>E-commerce</title>
        <meta name="description" content="Shop anytime" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <header>
          <Slider/>
        </header>
      </main>
    </>
  );
}
