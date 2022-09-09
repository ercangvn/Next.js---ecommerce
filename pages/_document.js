import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charset="utf-8" />
        <meta name="format-detection" content="telephone=no" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta name="theme-color" content="#f5f5f5" />

        <link rel="icon" type="image/png" href="../src/dist/img/favicon.png" />
        <link rel="apple-touch-icon" href="../src/dist/img/favicon-touch.png" />

        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
      </Head>
      <body>
        <NextScript />
      </body>
    </Html>
  );
}
