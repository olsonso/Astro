import React from 'react';
import styled from 'styled-components';
import media from "styled-media-query";

const Select = styled.select`
  margin: 0rem 2.5rem;
  padding: 0rem 0.5rem;
  font-size: 1rem;
  background: transparent;
  border-radius: 2px;
  float:right;
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    float:none;
  `}
`

export const SelectOpt = styled.option`
  font-family: Roboto;
  font-size: 1rem;
`

class ThemeSelect extends React.Component {
  render() {
    return (
        <Select onChange={e => this.props.handleThemeChange(e)}>
          <SelectOpt value="theme1">Feelin Happy</SelectOpt>
          <SelectOpt value="theme2">Feeling Blue</SelectOpt>
        </Select>

    )
  }
}

export default ThemeSelect
