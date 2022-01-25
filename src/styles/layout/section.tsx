import styled from "styled-components";
import theme from "../theme";

interface PropsSectionCenter {
    padding?: boolean;
}

const SectionCenter = styled.div<PropsSectionCenter>`
  width: 90vw;
  margin: 0 auto;
  max-width: 1200px;
  background: none;
  @media screen and (min-width: 992px) {
    .section-center{
      width: 95vw;
    }
  }
  ${({ padding }) => padding && `
    padding: 1rem 0;
  `};
  @media screen and (min-width: ${props => props.theme.size.size_md}) {
  ${({ padding }) => padding && `
    padding: 2rem 0;
  `}
  }
  @media screen and (min-width: ${props => props.theme.size.size_lg}) {
    ${({ padding }) => padding && `
    padding: 4rem 0;
  `}
  }
  @media screen and (min-width: ${props => props.theme.size.size_xl}) {
    ${({ padding }) => padding && `
    padding: 4rem 0;
  `}
  }
`

const SectionCenterNav = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 1200px;
  padding: .5rem 0;
  @media screen and (min-width: 992px) {
    .section-center{
      width: 95vw;
    }
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo{
    display: flex;
    align-items: center;
    img{
      height: 50px;
    }
  }
  .links{
    display: flex;
    align-items: center;
    a{
      margin: 0 .5rem;
      font-size: 18px;
      text-decoration: none;
      color: ${props => props.theme.colors.white};
    }
  }
  .account{
    
  }
  
`

export {
    SectionCenter,
    SectionCenterNav
}
