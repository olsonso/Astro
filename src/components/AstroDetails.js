import React from 'react';
import styled from "styled-components";
import media from "styled-media-query";

const Card = styled.div`
    box-shadow: 1px 4px 8px 1px ${props => props.theme.primary};
    -webkit-transition: 0.2s;
    transition: 0.3s;
    padding: 2px 16px;
    display: inline-block;
    height: 120px;
    width: 800px;
    transition-timing-function: ease-in;
    ${media.lessThan("medium")`
      /* screen width is less than 768px (medium) */
      width:100%;
    `}
`;



const AstroDetail = ({astro, term}) => {
  if(!astro){
    return <Card> <h3> Current Search: </h3> {term}</Card>;
  }
  return (
    <Card><h3>
    {astro[0]}
  </h3>
  {astro[1]}
  </Card>

);
};

export default AstroDetail;
