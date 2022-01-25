import React, { ReactChildren } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Head from 'next/head';

interface AuxProps  {
  children: React.ReactNode | ReactChildren
}

const Layout = ({ children }: AuxProps) => {
  return (
    <>
        <Head>

            <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600&display=swap"
                          rel="stylesheet"/>


        </Head>
      <Header/>

            {children}

      <Footer/>
    </>
  )
};

export default Layout;
