import React from 'react';
import {Button} from "../ui/Button";
import {ButtonSecondary} from "../ui/ButtonSecondary";
import {SectionCenter} from "../../styles/layout/section";
import styled from "styled-components";
import theme from "../../styles/theme";
import ContainerDetails from "./ContainerDetails";

function HeaderHome() {
    return (
        <SectionHeaderHome>
            <SectionCenter padding={false}>
                <div className="container-header">
                    <h1>Discover, and collect extraordinary <span>Monster</span> NFTs</h1>
                    <h6>Marketplace for monster character collections non fungible token NFTs</h6>
                    <div className="container-btns">
                        <Button
                            title={'Explore'}
                            onclick={()=>{}}
                        />
                        <ButtonSecondary
                            title={'Create'}
                            onclick={()=>{}}
                            icon={'https://res.cloudinary.com/mikunaalli/image/upload/v1643140507/foros/Group_bny5oh.svg'}
                        />
                    </div>
                    <ContainerDetails home={false}/>
                </div>
            </SectionCenter>
        </SectionHeaderHome>
    );
}

const SectionHeaderHome = styled.section`
  background-image: url("https://res.cloudinary.com/mikunaalli/image/upload/v1643136950/foros/Graphic_rs9tb2.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  
  .container-header{
    margin-top: 4rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    h1{
      width: 46%;
      span{
        color: ${theme.colors.gradient};
      }
    }
    h6{
      font-weight: 400;
    }
  }
  h1{
    
  }
  h6{
    margin: 2rem 0;
  }
  .container-btns{
    display: flex;
  }
`


export default HeaderHome;
