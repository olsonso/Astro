import React, { Component } from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { theme1, theme2, Button } from "./theme/globalStyles";
import ThemeSelect from "./components/ThemeSelect";
import SearchBar from "./components/SearchBar";
import axios from 'axios';
import _ from 'lodash';
import AstroList from './components/AstroList';
import AstroDetail from './components/AstroDetails';

const logo = "http://astrologyreadings.online/online_calcs/img/astrology_854_300px1.png";

const AppWrapper = styled.div`
  text-align: center;
  margin:10px;
`;

const AppHeader = styled.div`
  height: 7rem;
  padding: 1rem;
  color: ${props => props.theme.dark};
  background-color: ${props => props.theme.primary};
`;

const AppTitle = styled.h1`
  font-weight: 400;
`;

const twinkles = keyframes`
from {background-position:0 0;}
to {background-position:-10000px 5000px;}
`;

const Star = styled.div`
background-color: black;
  z-index:0;
  width:100%;
  height:100%;
  display:block;
`;
const Twinkle = styled.div`
background:"(http://www.script-tutorials.com/demos/360/images/twinkling.png";
  z-index:1;
  width:100%;
  height:100%;
  display:block;
`;

const rotate360 = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
`;

const AppLogo = styled.img`
  animation: ${rotate360} infinite 10s linear;
  height: 150px;
  margin-left: auto;
  margin-right: auto;
  &:hover {
    animation: ${rotate360} infinite 5s linear;
  }
  display:block;
`;

const AppIntro = styled.p`
  color: ${props => props.theme.dark};
  font-size: 1.2em;
`;

class App extends Component {
  constructor(props) {
		super(props);

		this.state = {
			theme: theme1,
      astro:{"data": ''},
      selectedAstro:null
		 };
}

  astroSearch(term){

     const newUrl = 'https://aztro.sameerkumar.website/?sign=';
     const url = `${newUrl}${term}&day=today`;
     axios.post(url)
     .then((res)=>{
       this.setState({
         astro:res,
         selectedAstro:''
       });
     })
    .catch((err)=>{
      console.log(err);
    })
   }


  handleThemeChange = e => {
  let theme = e.target.value;
  theme === "theme1" ? (theme = theme1) : (theme = theme2);
  this.setState({ theme });
};
  render() {
    //call only couple seconds
		const astroSearch = _.debounce((term)=>{this.astroSearch(term) }, 1000);

    return (
        <ThemeProvider theme={this.state.theme}>
          <AppWrapper>
            <AppHeader>
                <ThemeSelect handleThemeChange={this.handleThemeChange} />
              <AppTitle>Daily Astrology</AppTitle>
            </AppHeader>
            <SearchBar onSearchTermChange={astroSearch}/>
            <AstroList onAstroSelect={selectedAstro => this.setState({selectedAstro})} astro={this.state.astro} />
            <AstroDetail  astro={this.state.selectedAstro}/>
            <AppLogo src={logo} alt="logo" />
          </AppWrapper>
        </ThemeProvider>
      );
  }
}

export default App;
