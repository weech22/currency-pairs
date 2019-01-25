import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Header';

import CurrencyList from './CurrencyList';

const Wrap = styled.div`
  background-color: white;
  border-radius: 5px;
`;
const Title = styled.h1`
  font-size: 14px;
  color: #303a4f;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  padding-left: 17px;
  padding-top: 29px;
  margin: 0;
  margin-bottom: 20px;
`;

const Body = styled.div``;

export default class extends Component {
  state = {};

  render() {
    return (
      <Wrap>
        <Title>Currency Pairs</Title>
        <Header />
        <Body>
          <CurrencyList />
        </Body>
      </Wrap>
    );
  }
}
