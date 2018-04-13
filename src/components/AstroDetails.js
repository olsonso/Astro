import React from 'react';
import styled from "styled-components";

const Card = styled.div`
    box-shadow: 1px 4px 8px 1px ${props => props.theme.primary};
    -webkit-transition: 0.3s;
    transition: 0.3s;
    padding: 2px 16px;
    display: inline-block;
    height: 100px;
    width: 800px;
`;



const AstroDetail = ({astro, term}) => {
  if(!astro){
    return <Card> <h2> Current Search: {term}</h2></Card>;
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
