import "../styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
    <Head>
      <script defer data-domain="davezaxh.xyz" src="https://analytics.davezaxh.xyz/js/script.js"></script>
      
    </Head>
    <Component {...pageProps} />
    </div>
  );
}
export default MyApp;
