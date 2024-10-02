import "../styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import PlausibleProvider from 'next-plausible'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider domain="davezaxh.xyz">
      <Component {...pageProps} />
      </PlausibleProvider>
    
  );
}
export default MyApp;
