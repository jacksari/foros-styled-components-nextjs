import React from 'react'
import styled from 'styled-components';

export function Button (): JSX.Element  {
  return (
    <Boton>
      Hola
    </Boton>
  )
}

const Boton = styled.button`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 37.6px;
  text-align: center;
  font-size: 15px;
  font-weight: 600;

  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  ${props => props.theme.colors.gradient}
`

