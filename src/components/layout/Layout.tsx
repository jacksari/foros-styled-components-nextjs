import React, { ReactChildren } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface AuxProps  {
  children: React.ReactNode | ReactChildren
}

const Layout = ({ children }: AuxProps) => {
  return (
    <>
      <Header/>

            {children}

      <Footer/>
    </>
  )
};

export default Layout;
