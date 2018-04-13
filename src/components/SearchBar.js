import React, {Component} from 'react';
import styled from "styled-components";
import media from "styled-media-query";

export const Input = styled.input`
  padding: 0.5em;
  margin: 1em;
  background: transparent;
  font-family: 'Poiret One',cursive;
  font-size: 1.2em;
  border:none;
  width:500px;
  border-radius: 2px;
  border-bottom: 2px solid black;
  color: black;
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    width:300px;
  `}
`;

class SearchBar extends Component {
	constructor(props){
		super(props);
		this.state = {term: ''};
	}

	render() {
		return (
			<Input placeholder="Enter a sign or click an icon below"
			value = {this.state.term}
			onChange={event => this.onInputChange(event.target.value)} />
	);
}

onInputChange(term){
	this.setState({term});
	this.props.onSearchTermChange(term);
  this.props.handleErrorChange(term);
	}
}

export default SearchBar;
