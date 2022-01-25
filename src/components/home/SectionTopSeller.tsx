import React from 'react';
import {SectionCenter} from "../../styles/layout/section";
import TitleSection from "../ui/TitleSeccion";
import styled from "styled-components";
import SellerItem from "../live/SellerItem";

function SectionTopSeller() {
    return (
        <SectionTop>
            <SectionCenter padding>
                <TitleSection title={'Top Seller'} link={'#'}/>
                <div className="container-top-seller">
                    <SellerItem/>
                    <SellerItem/>
                    <SellerItem/>
                    <SellerItem/>
                    <SellerItem/>
                    <SellerItem/>
                    <SellerItem/>
                    <SellerItem/>
                </div>
            </SectionCenter>
        </SectionTop>
    );
}

const SectionTop = styled.section`
  .container-top-seller{
    margin-top: 4rem;
    display: grid;
    grid-template-columns: repeat(8,1fr);
    gap: 1rem;
  }
`
export default SectionTopSeller;
