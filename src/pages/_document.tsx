import {
  Html, Head, Main, NextScript
} from 'next/document';

function MyDocument() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-neutral-lightGrayBlue">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
