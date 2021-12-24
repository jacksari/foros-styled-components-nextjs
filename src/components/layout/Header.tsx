import {SectionCenterNav} from "../../styles/layout/section";
import {Button} from "../ui/Button";

function Header(): JSX.Element {
  return (
    <nav>
        <SectionCenterNav>
            <div className="logo">
                <img src="/img/logo.png" alt=""/>
            </div>
            <div className="links">
                <a href="#">Home</a>
                <a href="#">Explore</a>
                <a href="#">Contact</a>
            </div>
            <div className="account">
                <Button/>
            </div>
        </SectionCenterNav>
    </nav>
   );
}

export default Header;
