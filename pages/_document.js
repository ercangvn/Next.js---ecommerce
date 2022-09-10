import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#f5f5f5" />

        <link rel="icon" type="image/png" href="../src/dist/img/favicon.png" />
        <link rel="apple-touch-icon" href="../src/dist/img/favicon-touch.png" />

        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
