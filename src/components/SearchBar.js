import React, {Component} from 'react';
import styled from "styled-components";

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.theme.primary};
  background: transparent;
  border: none;
  font-size: 1.2em;
  width:500px;
  border-radius: 3px;
  border-bottom: 1px solid black;
`;
class SearchBar extends Component {

	constructor(props){
		super(props);
		this.state = {term: ''};
	}

	render() {
		return (
			<Input placeholder="Enter a sign (aries, gemini, virgo)"
			value = {this.state.term}
			onChange={event => this.onInputChange(event.target.value)} />
	);
}

onInputChange(term){
	this.setState({term});
	this.props.onSearchTermChange(term);
	}
}

export default SearchBar;
