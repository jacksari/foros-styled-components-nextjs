import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing:border-box
  }
  html {
    height: 100%;
  }
  body {
    color: ${props => props.theme.colors.secondary};
    background: ${props => props.theme.colors.background};
    font: 400 16px Josefin Sans, sans-serif;
    height: 100%;
  }
  h1 {
    font-size: 56px;
  }
  h2{
    font-size: 48px;
  }
  h3{
    font-size: 40px;
  }
  h4{
    font-size: 32px;
  }
  h5{
    font-size: 24px;
  }
  h6{
    font-size: 18px;
  }
  button{
    cursor: pointer;
  }
  a{
    text-decoration: none;
  }
  #__next {
  height: 100%;
  }
`
