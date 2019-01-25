import React, { Component } from 'react';
import styled from 'styled-components';
import Pair from './CounterPairButton';

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 14px;
`;

export default class extends Component {
  state = {};

  render() {
    return (
      <Wrap>
        <Pair>BTC</Pair>
        <Pair>XNT</Pair>
        <Pair>BTC</Pair>
        <Pair>ERT</Pair>
        <Pair>LTC</Pair>
      </Wrap>
    );
  }
}
