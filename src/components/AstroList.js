import React from 'react';
import AstroListItem from './AstroListItem';
import styled from "styled-components";

const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const AstroList = (props) => {

var result = Object.keys(props.astro.data).map(function(key) {
return [key.toUpperCase(), (props.astro.data[key])];
});


const astroItems = result.map((astro) =>{
  return(
    <AstroListItem
      onAstroSelect = {props.onAstroSelect}
      key={astro[0]}
      astro={astro} />
  );
})

	return (

    <Gallery>
      {astroItems}
    </Gallery>
	);
};

export default AstroList;
