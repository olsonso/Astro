import styled, { injectGlobal, css } from 'styled-components'

export const theme1 = {
  primary: '#E7CBA8',
  secondary: '#01c1d6',
  danger: '#eb238e',
  light: '#f4f4f4',
  dark: '#222'
}

export const theme2 = {
  primary: '#F29FC4',
  secondary: '#ffb617',
  danger: '#f16623',
  light: '#f4f4f4',
  dark: '#222'
}

export const error ={
  primary:'#222',
  danger: '#f16623',
}

injectGlobal`

  @import url('https://fonts.googleapis.com/css?family=Monoton');
  @import url('https://fonts.googleapis.com/css?family=Poiret+One');

  body {
    padding: 0;
    margin: 0;
    font-family: 'Poiret One', cursive;
  }

  h1 {
      font-family: 'Monoton', cursive;
      font-size:3rem;
      color:black;
      letter-spacing: .5rem;
  }
`

export const Button = styled.button`
  font-size: 1.5rem;
  border-radius: 5px;
  padding: 0.25rem 1rem;
  margin: 0 1rem;
  background: transparent;
  color: ${props => props.theme.primary};
  border: 2px solid ${props => props.theme.primary};
  cursor: pointer;
  ${props =>
    props.primary &&
    css`
      background: ${props => props.theme.primary};
      color: white;
    `};
  &:hover {
    transform: translateY(1px);
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  }
`
