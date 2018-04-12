import React from 'react';
import styled from "styled-components";

const Thumbnail = styled.div`
  flex-grow: 1;
  width: 100px;
  height: 20px;
  padding: 5px;
  margin: 15px;
  box-shadow: 1px 4px 8px 1px ${props => props.theme.primary};
  &:hover {
    background-color: ${props => props.theme.primary}
  }
`;



const AstroListItem =({astro, onAstroSelect}) =>{
  return(
    <Thumbnail onClick={()=> onAstroSelect(astro)} >
      {astro[0]}
    </Thumbnail>
  );
};
export default AstroListItem;
