import React from 'react';
import styled from "styled-components";

interface ContainerDetailsProps {
    home?: boolean;
}

function ContainerDetails({home}: ContainerDetailsProps) {
    const items = [
        {
            img: 'https://res.cloudinary.com/mikunaalli/image/upload/v1643137658/foros/IMG_mu3ody.svg',
            title: 'Set up your wallet',
            description: 'Once you’ve set up your wallet of choice, connect it to OpenSeaby clicking the NFT Marketplacein the top right corner.'
        },
        {
            img: 'https://res.cloudinary.com/mikunaalli/image/upload/v1643140946/foros/IMwwG_hzlt2i.svg',
            title: 'Create your collection',
            description: 'Click Create and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.'
        },
        {
            img: 'https://res.cloudinary.com/mikunaalli/image/upload/v1643140944/foros/ss_r3khvd.svg',
            title: 'Add your NFTs',
            description: 'Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats'
        },
        {
            img: 'https://res.cloudinary.com/mikunaalli/image/upload/v1643140942/foros/asd_j04xlu.svg',
            title: 'List them for sale',
            description: 'Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs!'
        }
    ]
    return (
        <ContainerDetailsStyle home={home}>
            {
                items.map((item, index) => (
                    <div key={index} className="item-details">
                        <img src={item.img} alt={item.title}/>
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                    </div>
                ))
            }
        </ContainerDetailsStyle>
    );
}

const ContainerDetailsStyle = styled.div<ContainerDetailsProps>`
  margin-top: 6rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
  margin-bottom: 0;
  ${({ home }) => home && `
    margin-bottom: 4rem;
    margin-top: 4rem;
  `};
  .item-details{
    text-align: center;
    img{

    }
    h4{
      margin: 1rem 0;
      font-size: 24px;
    }
    p{
      font-weight: 300;
      font-size: 14px;
    }
  }
`

export default ContainerDetails;
