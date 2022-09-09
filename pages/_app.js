import Head from "next/head";
import "../components/layout/Layout";
import Layout from "../components/layout/Layout";
import "../styles/sass/app.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Next.js E-Commerce</title>

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
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
