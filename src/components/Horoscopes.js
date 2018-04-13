import React, {Component} from 'react';
import styled from "styled-components";
import is from 'styled-is';

const Grid = styled.div`
  display: grid;
  ${is('templateColumns') `
    grid-template-columns: ${props => props.templateColumns};
  `};
  ${is('gap') `
    grid-gap: ${props => props.gap};
  `};
  ${is('rowGap') `
    grid-row-gap: ${props => props.rowGap};
  `};
  ${is('autoRows') `
    grid-auto-rows: ${props => props.autoRows};
  `};
  ${is('width') `
    width: ${props => props.width};
  `};
  height:auto;
`

const GridItem = styled.div`
  ${is("column")`
    grid-column: ${props => props.column}`};
  ${is("row")`
    grid-row: ${props => props.row}`};
  ${is("bgColor") `
    background-color: ${props => props.bgColor}`};
    margin:10px;
    margin-left: auto;
    margin-right: auto;
    &:hover {
      background-color: ${props => props.theme.primary}
    }
`;
const Image = styled.img`
    height:100px;
    width:100px;
`;

const Horoscopes = ({onAstroSelect}) => {

    return(
      <Grid width="100%" templateColumns="repeat(6, 1fr)" gap="5px" autoRows="minmax(100px, auto)">
        <GridItem onClick={()=> onAstroSelect('Aries') }> <h2> Aries </h2> <Image src="http://www.freepngimg.com/download/aries/10-2-aries-png.png"/> <p>dates</p> </GridItem>
        <GridItem onClick={()=> onAstroSelect('Taurus') }> <h2> Taurus</h2> <Image src="http://www.pngmart.com/files/5/Taurus-Transparent-PNG.png"/> <p>dates </p></GridItem>
        <GridItem onClick={()=> onAstroSelect('Gemini') }> <h2> Gemini </h2> <Image src="https://png.icons8.com/metro/1600/gemini.png"/> <p> dates </p> </GridItem>
        <GridItem onClick={()=> onAstroSelect('Cancer') }> <h2> Cancer </h2> <Image src="http://pngimages.net/sites/default/files/cancer-png-image-74032.png"/> <p> dates </p> </GridItem>
        <GridItem onClick={()=> onAstroSelect('Leo') }> <h2> Leo </h2> <Image src="https://png.icons8.com/metro/1600/leo.png"/> <p> dates </p> </GridItem>
        <GridItem onClick={()=> onAstroSelect('Virgo') }> <h2> Virgo </h2> <Image src="http://www.pngmart.com/files/5/Virgo-PNG-Free-Download.png"/> <p> dates </p> </GridItem>
        <GridItem onClick={()=> onAstroSelect('Libra') }> <h2> Libra </h2> <Image src="http://www.pngall.com/wp-content/uploads/2016/05/Libra-Free-Download-PNG-180x180.png"/> <p> dates </p> </GridItem>
        <GridItem onClick={()=> onAstroSelect('Scorpio') }> <h2> Scorpio </h2> <Image src="https://cdn.pixabay.com/photo/2016/03/31/15/24/astrology-1293256_960_720.png"/> <p> dates </p> </GridItem>
        <GridItem onClick={()=> onAstroSelect('Sagitarrius') }> <h2> Sagitarrius </h2> <Image src="https://cdn.pixabay.com/photo/2012/04/18/01/14/sagittarius-36395_960_720.png"/> <p> dates </p> </GridItem>
        <GridItem onClick={()=> onAstroSelect('Capricorn') }> <h2> Capricorn </h2> <Image src="http://www.pngall.com/wp-content/uploads/2016/05/Capricorn-PNG-Clipart-180x180.png"/> <p> dates </p> </GridItem>
        <GridItem onClick={()=> onAstroSelect('Aquarius') }> <h2> Aquarius </h2> <Image src="http://mystars.xyz/wp-content/uploads/2017/04/aquarius-357x240.png"/> <p> dates </p> </GridItem>
        <GridItem onClick={()=> onAstroSelect('Pisces') }> <h2> Pisces </h2> <Image src="http://pngimages.net/sites/default/files/pisces-horoscope-sign-png-image-100976.png"/> <p> dates </p> </GridItem>
      </Grid>
    );

};


export default Horoscopes;
