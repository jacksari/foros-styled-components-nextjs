import {SectionCenter} from "../../styles/layout/section";
import styled from "styled-components";
import theme from "../../styles/theme";
import { FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa";
import Link from 'next/link';
import { AiOutlineSend } from "react-icons/ai";


function Footer(): JSX.Element {
  return (
    <FooterSection>
        <SectionCenter padding>
            <div className="container-grid">
                <div className="info">
                    <img src="/img/logo.png" alt=""/>
                    <p>Lorem ipsum dolor sit amet,consectetur
                        adipisicing elit. Quis non, fugit totam vel
                        laboriosam vitae.</p>
                    <div className="social-links">
                        <div className="icon">
                            <a href="#" target="_blank">
                                <FaFacebook/>
                            </a>
                        </div>
                        <div className="icon">
                            <a href="#" target="_blank">
                                <FaTwitter/>
                            </a>

                        </div>
                        <div className="icon">
                            <a href="#" target="_blank">
                                <FaGoogle/>
                            </a>

                        </div>
                    </div>
                </div>
                <LinksFooter>
                    <h4>My Account</h4>
                    <Link href={'#'}>
                        <a>Authors</a>
                    </Link>
                    <Link href={'#'}>
                        <a>Authors</a>
                    </Link>
                    <Link href={'#'}>
                        <a>Authors</a>
                    </Link>
                    <Link href={'#'}>
                        <a>Collection</a>
                    </Link>
                </LinksFooter>
                <LinksFooter>
                    <h4>My Account</h4>
                    <Link href={'#'}>
                        <a>Authors</a>
                    </Link>
                    <Link href={'#'}>
                        <a>Collection</a>
                    </Link>
                </LinksFooter>
                <LinksFooter>
                    <h4>My Account</h4>
                    <Link href={'#'}>
                        <a>Authors</a>
                    </Link>
                    <Link href={'#'}>
                        <a>Collection</a>
                    </Link>
                </LinksFooter>
                <div className="subscriber">
                    <h4>Subscribe Us</h4>
                    <form>
                        <input type="text" placeholder="Ingrese su correo"/>
                        <div className="icon">
                            <AiOutlineSend/>
                        </div>
                    </form>
                </div>
            </div>
            <div className="container-copy">
                <p>© { new Date().getFullYear()} Desarrollado por MiCole - Todos los derechos reservados.</p>
                <div className="links">
                    <Link href={'#'}>
                        <a >Inicio</a>
                    </Link>
                    <Link href={'#'}>
                        <a >Términos y condiciones</a>
                    </Link>
                </div>
            </div>
        </SectionCenter>
    </FooterSection>
   );
}

const FooterSection = styled.footer`
  background: ${theme.colors.black};
  .container-grid{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 2rem;
    .info{
      grid-column-end: span 2;

      img{
        
      }
      p{
        margin: 1.5rem 0;
        font-weight: 300;
      }
      .social-links{
        display: flex;
        align-items: center;
        .icon{
          display: flex;
          align-items: center;
          justify-content: center;
          background: ${theme.colors.dark};
          padding: .5rem;
          border-radius: 6px;
          margin-right: .5rem;
          a{
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
          }
        }
      }
    }
    .subscriber{
      grid-column-end: span 2;
      h4{
        font-size: 18px;
        color: #fff;
        margin-bottom: 1rem;
      }
      form{
        display: flex;
        align-items: center;
        height: 40px;
        input{
          outline: none;
          height: 100%;
          background: transparent;
          border: 1px solid ${theme.colors.dark};
          border-top-left-radius: 6px;
          border-bottom-left-radius: 6px;
          padding: .2rem 1rem;
          color: #fff;
          font-weight: 500;
        }
        .icon{
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          background: ${theme.colors.primary};
          height: 100%;
          width: 40px;
          border-bottom-right-radius: 6px;
          border-top-right-radius: 6px;
        }
      }
    }
  }
  .container-copy{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 3rem;
    p{
      color: #fff;
      font-size: 14px;
      font-weight: 400;
    }
    .links{
      
      a{
        margin-left: .5rem;
        color: #fff;
      }
    }
  }
`

const LinksFooter = styled.div`
  display: flex;
  flex-direction: column;
    h4{
      font-size: 18px;
      color: #fff;
      margin-bottom: 1rem;
    }
  a{
    text-decoration: none;
    color: #fff;
    font-weight: 300;
    margin: .5rem 0;
  }
`

export default Footer;
