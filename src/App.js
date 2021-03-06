import React, { Component } from "react";
import AstroList from './components/AstroList';
import AstroDetail from './components/AstroDetails';
import Horoscopes from "./components/Horoscopes";
import GitHub from './components/GitHub';
import ThemeSelect from "./components/ThemeSelect";
import SearchBar from "./components/SearchBar";
import styled, { ThemeProvider } from "styled-components";
import { theme1, theme2 } from "./theme/globalStyles";
import axios from 'axios';
import _ from 'lodash';
import media from "styled-media-query";

const AppWrapper = styled.div`
  text-align: center;
  margin:10px;
  width:100%;
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    width:100%;
  `}
`;

const AppHeader = styled.div`
  height: 12rem;
  width:100%;
  padding: 1rem;
  color: ${props => props.theme.dark};
  background-color: ${props => props.theme.primary};
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    width:365px;
  `}
`;

const AppTitle = styled.h1`
  font-weight: 400;
`;

class App extends Component {
  constructor(props) {
		super(props);

		this.state = {
			theme: theme1,
      astro:{"data": ''},
      selectedAstro:null,
      term:'Gemini',
      active: true
		 };

     this.astroSearch(this.state.term);
}

  astroSearch(term){
     const newUrl = 'https://aztro.sameerkumar.website/?sign=';
     term = term.toUpperCase();
     const url = `${newUrl}${term}&day=today`;

     this.setState({
       term:"Loading..."
     })

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
  let checker = ["gemini", "aries", "virgo", "leo", "pisces", "aquarius", "libra", "sagittarius", "cancer", "scorpio", "taurus", "capricorn"];
  if (checker.some(function(v) { return input === v; })) {
     this.astroSearch(input);
     this.setState({
       active:false
     })
   }
  else(
       this.setState({
         active:true
       })
     )
};

  handleThemeChange = e => {
  let theme = e.target.value;
  theme === "theme1" ? (theme = theme1) : (theme = theme2);
  this.setState({ theme });
};
  render() {
    //call only couple seconds
		const astroSearch = _.debounce((term)=>{this.handleErrorChange(term) }, 500);

    return (
        <ThemeProvider theme={this.state.theme}>
          <AppWrapper>
            <AppHeader>
              <ThemeSelect handleThemeChange={this.handleThemeChange} />
              <AppTitle>Daily Astrology</AppTitle>
              <GitHub/>
            </AppHeader>
              <SearchBar onSearchTermChange={astroSearch} handleErrorChange={this.handleErrorChange} active={this.state.active}/>
              <AstroList onAstroSelect={selectedAstro => this.setState({selectedAstro})} astro={this.state.astro} />
              <AstroDetail  astro={this.state.selectedAstro} term={this.state.term}/>
                <Horoscopes onAstroSelect={astroSearch}/>
          </AppWrapper>
        </ThemeProvider>
      );
  }
}

export default App;
