import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

import bundle from "../assets/js/bundle.js"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
