import React, { Component } from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  background-color: white;
  position: absolute;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 10px 30px 0 rgba(111, 124, 151, 0.2);
`;

export default class extends Component {
  state = {};

  onChange = e => {};

  onFocus = () => {};

  onBlur = () => {};

  render() {
    //const { } = this.state;
    return <Wrap>1</Wrap>;
  }
}
