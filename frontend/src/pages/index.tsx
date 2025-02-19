import Form from "@/components/Form";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Head from "next/head";

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Cytric NFT Minting</title>
        <meta
          content="Fullstack Developer Assignment [NFT Minting]"
          name="description"
        />
        <meta content="Anderson Osayerie" name="author" />
        <link rel="author" href="https://andemosa.tech/" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <main className="min-h-screen bg-gradient-to-r from-black to-[#111827] flex flex-col">
        <Header />
        <section>
          <Hero />
          <Form />
          <Gallery />
        </section>
      </main>
    </div>
  );
};

export default HomePage;
