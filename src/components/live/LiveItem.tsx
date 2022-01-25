import React from 'react';
import styled from "styled-components";
import { FaRegHeart } from "react-icons/fa";
import { AiFillFire } from "react-icons/ai";
import theme from "../../styles/theme";


function LiveItem() {
    return (
        <Live>
            <div className="container-img">
                <img src="https://res.cloudinary.com/mikunaalli/image/upload/v1643142487/foros/IMG_c2wrgr.png" alt=""/>
                <div className="likes">
                    <FaRegHeart className="mr-2"/>
                    <p>100</p>
                </div>
                <div className="counter">
                    <AiFillFire className="mr-2" color={theme.colors.gradient} size={'1rem'}/>
                    <p>05 : 12 : 07 : 45</p>
                </div>
            </div>
            <div className="content">
                <div className="header">
                    <h4>Hamlet Contemplates ...</h4>
                    <button>BSC</button>
                </div>
                <div className="footer">
                    <div className="author">
                        <img src="https://res.cloudinary.com/mikunaalli/image/upload/v1643142579/foros/IMG_csol4u.png" alt=""/>
                        <div className="info">
                            <p className="type">Creator</p>
                            <p className="name">SalvadorDali</p>
                        </div>
                    </div>
                    <div className="price">
                        <p className="type">Current Bid</p>
                        <p className="value">4.89 ETH</p>
                    </div>
                </div>
            </div>
        </Live>
    );
}

const Live = styled.article`
  background: ${theme.colors.dark};
  padding: 1rem;
  border-radius: 20px;
  cursor: pointer;
  z-index: -10;
    .container-img{
      position: relative;
      img{
        width: 100%;
      }
      .likes{
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: ${theme.colors.background};
        display: flex;
        align-items: center;
        padding: .4rem .5rem;
        border-radius: 6px;
        .mr-2{
          margin-right: .2rem;
        }
      }
      .counter{
        position: absolute;
        bottom: 1rem;
        left: 50%;
        transform: translateX(-50%);
        background: ${theme.colors.background};
        padding: .3rem .2rem;
        border-radius: 6px;
        display: flex;
        align-items: end;
        justify-content: center;
        width: 130px;
        .mr-2{
          margin-right: .2rem;
        }
        p{
          font-size: 14px;
        }
      }
    }
  .content{
    .header{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 1rem 0;
      h4{
        font-size: 18px;
        font-weight: 500;
      }
      button{
        border: none;
        background: ${theme.colors.primary};
        padding: .2rem .4rem !important;
        border-radius: 8px;
        font-size: 12px;
        font-weight: 400;
        color: #fff;
      }
    }
    .footer{
      display: flex;
      align-items: center;
      justify-content: space-between;
      .author{
        display: flex;
        align-items: center;
        img{
          margin-right: .3rem;
        }
        .info{
          .type{
            color: ${theme.colors.white2};
            font-size: 13px;
            font-weight: 400;
          }
          .name{
            margin-top: .4rem;
            font-weight: 400;
            color: #fff;
            font-size: 15px;
          }
        }
      }
      .price{
        .type{
          color: ${theme.colors.white2};
          font-size: 13px;
        }
        .value{
          margin-top: .4rem;
          color: #fff;
          font-size: 18px;
        }
      }
    }
  }
`

export default LiveItem;
