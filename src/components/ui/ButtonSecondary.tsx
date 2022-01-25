import React from 'react'
import styled from 'styled-components';

interface ButtonProps  {
    title: string,
    onclick?: Function,
    icon?: string
}

export function ButtonSecondary (
    {
        title = 'Sin titulo',
        onclick = ()=>{},
        icon = 'https://res.cloudinary.com/mikunaalli/image/upload/v1643140509/foros/rocket_vuglem.svg'
    }: ButtonProps,
): JSX.Element  {
  return (
    <Boton onClick={()=>onclick}>
        <img src={icon} alt=""/>
        {title}
    </Boton>
  )
}

const Boton = styled.button`
  /* This renders the buttons above... Edit me! */
  display: flex;
  align-items: center;
  justify-items: center;
  padding: 0.5rem 2.5rem;
  margin: 0.5rem 1rem;
  background: #fff;
  color: ${props => props.theme.colors.dark};
  border: 2px solid ${props => props.theme.colors.dark};
  border-radius: 37.6px;
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  img{
    margin-right: .5rem;
  }

  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  ${props => props.theme.colors.gradient}
`

