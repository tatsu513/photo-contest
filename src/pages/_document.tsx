import { Html, Head, Main, NextScript } from "next/document";

const _document = () => {
  return (
    <Html lang="ja">
      <Head />
      <body>
        <div id="fb-root"></div>
        <script
          async
          defer
          crossOrigin="anonymous"
          src="https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v12.0"
          nonce="pZcTX290"
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default _document;
