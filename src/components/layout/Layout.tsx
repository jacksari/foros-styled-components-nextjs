import React, { ReactChildren } from "react";
import Footer from "./Footer";
import Header from "./Header";
import {SectionCenter} from "../../styles/layout/section";

interface AuxProps  {
  children: React.ReactNode | ReactChildren
}

const Layout = ({ children }: AuxProps) => {
  return (
    <>
      <Header/>
        <SectionCenter>
            {children}
        </SectionCenter>
      <Footer/>
    </>
  )
};

export default Layout;
