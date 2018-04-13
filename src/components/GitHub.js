import React, {Component} from 'react';
import styled from "styled-components";

const Icon = styled.img`
  height:30px;
  width:30px;
  transition: all .2s ease-in-out;
  &:hover {
  background-color: ${props => props.theme.primary}
  transform: scale(1.1);
  }
`;

class GitHub extends Component {
  render(){
  return(
    <a href="https://github.com/olsonso/Astro">
    <Icon src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2000px-Octicons-mark-github.svg.png'/>
    </a>
    );
  }
}

export default GitHub;
