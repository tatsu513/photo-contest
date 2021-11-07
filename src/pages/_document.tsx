import { Html, Head, Main, NextScript } from "next/document";

const _document = () => {
  return (
    <Html lang="ja">
      <Head />
      <body>
        <div id="fb-root"></div>
        <div id="fb-root"></div>
        <script
          async
          defer
          crossOrigin="anonymous"
          src="https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v12.0&appId=2995311247424073&autoLogAppEvents=1"
          nonce="NirHvNso"
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default _document;
