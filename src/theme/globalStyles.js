import { injectGlobal } from 'styled-components';
import media from "styled-media-query";

export const theme1 = {
  primary: '#ffffcc',
  secondary: '#01c1d6',
  danger: '#eb238e',
  light: '#f4f4f4',
  dark: '#222'
}

export const theme2 = {
  primary: '#666699',
  secondary: '#ffb617',
  danger: '#f16623',
  light: '#f4f4f4',
  dark: '#222'
}

injectGlobal`

  @import url('https://fonts.googleapis.com/css?family=Monoton');
  @import url('https://fonts.googleapis.com/css?family=Poiret+One');
  @import url('https://fonts.googleapis.com/css?family=Permanent+Marker');


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

      ${media.lessThan("medium")`
        /* screen width is less than 768px (medium) */
          font-size:2rem;
      `}
  }

  h2 {
    font-family: 'Permanent Marker', cursive;
    font-size: 16px;
  }

  h3 {
    font-family: 'Permanent Marker', cursive;
  }
`
