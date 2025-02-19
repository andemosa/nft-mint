import Link from "next/link";
import Head from "next/head";

import Header from "@/components/Header";

export default function NotFound() {
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
        <section className="flex-1 flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8 text-white">
          <div className="mx-auto max-w-md text-center">
            <FrownIcon className="mx-auto h-12 w-12 text-white" />
            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Oops, page not found!
            </h1>
            <p className="mt-4">
              The page you're looking for doesn't seem to exist. Let's get you
              back on track.
            </p>
            <div className="mt-6">
              <Link
                href="/"
                className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                prefetch={false}
              >
                Go to Homepage
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function FrownIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  );
}
