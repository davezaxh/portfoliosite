import React, { ReactNode } from "react";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const description = "Undergoing an Update....🔃"

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div className="relative min-h-screen flex flex-col justify-center items-center bg-hero bg-cover">
    <Head>
      <title>Davezaxh 💡</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content={description}
      />
      <meta property="og:title" content={`Davezaxh`} />
      <meta property="og:image" content="/logo.jpeg" />
      <meta
        property="og:description"
        content={description}
      />
      <meta property="og:url" content="https://davezaxh.vercel.app" />
      <meta property="og:type" content="website" />
    </Head>
    {children}
  </div>
);

export default Layout;
