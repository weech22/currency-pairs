import React, { Component } from 'react';
import styled from 'styled-components';
import search from '../UI/search.png';

const Wrap = styled.div`
  margin-left: 15px;
`;
const Filter = styled.input`
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 16px 30px 16px 19px;
  background: #f0f5f7 url(${search}) no-repeat 95% center;
`;

// Change BG on Click

export default class extends Component {
  state = {};

  onChange = () => {};

  render() {
    return (
      <Wrap>
        <Filter />
      </Wrap>
    );
  }
}
