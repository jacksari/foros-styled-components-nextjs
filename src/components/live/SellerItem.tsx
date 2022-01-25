import React from 'react';
import { BsCheckLg } from "react-icons/bs";
import styled from "styled-components";
import theme from "../../styles/theme";


function SellerItem() {
    return (
        <Seller>
            <div className="container-img">
                <img src="https://res.cloudinary.com/mikunaalli/image/upload/v1643144783/foros/IMG_ywc8ge.png" alt=""/>
                <div className="icon">
                    <BsCheckLg size={'1.2rem'} color={theme.colors.white}/>
                </div>
            </div>
            <h5>Crispin Berry</h5>
            <h6>214.2 ETH</h6>
        </Seller>
    );
}

const Seller = styled.section`
  text-align: center;
  z-index: -10;
    .container-img{
      margin-bottom: .3rem;
      position: relative;
      .icon{
        background: ${theme.colors.primary};
        border-radius: 50%;
        position: absolute;
        bottom: 0;
        right: 0;
        height: 32px;
        width: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  h5{
    font-size: 18px;
    font-weight: 500;
    margin: .5rem 0;
  }
  h6{
    font-weight: 400;
    font-size: 16px;
  }
`

export default SellerItem;
