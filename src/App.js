import React, { Component } from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { theme1, theme2, error } from "./theme/globalStyles";
import ThemeSelect from "./components/ThemeSelect";
import SearchBar from "./components/SearchBar";
import axios from 'axios';
import _ from 'lodash';
import AstroList from './components/AstroList';
import AstroDetail from './components/AstroDetails';
import Horoscopes from "./components/Horoscopes";

const logo = "http://astrologyreadings.online/online_calcs/img/astrology_854_300px1.png";

const AppWrapper = styled.div`
  text-align: center;
  margin:10px;
`;

const AppHeader = styled.div`
  height: 10rem;
  padding: 1rem;
  color: ${props => props.theme.dark};
  background-color: ${props => props.theme.primary};
`;

const AppTitle = styled.h1`
  font-weight: 400;
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
      error: '#FFFF',
      astro:{"data": ''},
      selectedAstro:null,
      term:'Gemini'
		 };

     this.astroSearch(this.state.term);
}

validateTerm(term){
  let checker = ["Gemini", "gemini", "aries", "Aries", "virgo", "Virgo"];
  if (checker.some(function(v) { return term === v; })) {
   return true;
 }

  else{
    console.log("invalid");
    this.setState({
      error:"red"
    })
    return false;
  }
}

  astroSearch(term){

     const newUrl = 'https://aztro.sameerkumar.website/?sign=';
     const url = `${newUrl}${term}&day=today`;
     axios.post(url)
     .then((res)=>{
       this.setState({
         astro:res,
         selectedAstro:'',
         term: term
       });
     })
    .catch((err)=>{
      console.log(err);
    })
}

handleErrorChange = e => {
  let input = e.toLowerCase();
  console.log("here", e);
  let checker = ["gemini", "aries", "virgo", "pisces", "aquarius", "libra", "sagittarius", "cancer", "scorpio", "taurus", "capricorn"];
  if (checker.some(function(v) { return input === v; })) {
     this.astroSearch(input);
 }
 else{
   this.setState({error: 'red'})
 }
};

  handleThemeChange = e => {
  let theme = e.target.value;
  theme === "theme1" ? (theme = theme1) : (theme = theme2);
  this.setState({ theme });
};
  render() {
    //call only couple seconds
		const astroSearch = _.debounce((term)=>{this.handleErrorChange(term) }, 1000);

    return (
        <ThemeProvider theme={this.state.theme}>
          <AppWrapper>
            <AppHeader>
                <ThemeSelect handleThemeChange={this.handleThemeChange} />
              <AppTitle>Daily Astrology</AppTitle>
            </AppHeader>
            <SearchBar onSearchTermChange={astroSearch} error={this.state.error} handleErrorChange={this.handleErrorChange}/>
            <AstroList onAstroSelect={selectedAstro => this.setState({selectedAstro})} astro={this.state.astro} />
            <AstroDetail  astro={this.state.selectedAstro} term={this.state.term}/>
              <Horoscopes onAstroSelect={astroSearch}/>
          </AppWrapper>
        </ThemeProvider>
      );
  }
}

export default App;
