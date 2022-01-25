import {SectionCenterNav} from "../../styles/layout/section";
import {Button} from "../ui/Button";
import styled from "styled-components";
import theme from "../../styles/theme";

function Header(): JSX.Element {
  // @ts-ignore
    return (
    <Nav>
        <SectionCenterNav>
            <div className="logo">
                <img src="/img/logo.png" alt=""/>
            </div>
            <div className="links">
                <a href="#">Home</a>
                <a href="#">Explore</a>
                <a href="#">Contact</a>
                <a href="#">Nosotros</a>
                <a href="#">Lives</a>
            </div>
            <div className="account">
                <Button title={'Iniciar'} onclick={()=>{}}/>
            </div>
        </SectionCenterNav>
    </Nav>
   );
}

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  background: ${theme.colors.background};
`

export default Header;
