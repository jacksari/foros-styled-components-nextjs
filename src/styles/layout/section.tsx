import styled from "styled-components";

const SectionCenter = styled.section`
  width: 90vw;
  margin: 0 auto;
  max-width: 1200px;
  @media screen and (min-width: 992px) {
    .section-center{
      width: 95vw;
    }
  }
  padding: 1rem 0;
  @media screen and (min-width: ${props => props.theme.size.size_md}) {
    padding: 2rem 0;
  }
  @media screen and (min-width: ${props => props.theme.size.size_lg}) {
    padding: 4rem 0;
  }
  @media screen and (min-width: ${props => props.theme.size.size_xl}) {
    padding: 5rem 0;
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
