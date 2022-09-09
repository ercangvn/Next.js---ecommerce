import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Home</title>

        {/* Primary Meta Tags */}
        <meta name="title" content="" />
        <meta name="description" content="" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content="" />
        <meta property="twitter:title" content="" />
        <meta property="twitter:description" content="" />
        <meta property="twitter:image" content="" />
      </Head>

      <div className={"home-page"}>
        home page
        <Image
          src="/img/vercel.svg"
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </div>
    </main>
  );
}
