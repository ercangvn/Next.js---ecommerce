import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <main className="home-page">
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
      <div className="row">
        <div className="col-xxxl-2 col-xxl-3 col-xl-4 col-lg-5 col-md-6 col-sm-7 col-8">
          home
        </div>
      </div>
    </main>
  );
}
