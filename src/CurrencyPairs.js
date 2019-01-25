import React, { Component } from 'react';
import styled from 'styled-components';
import Filter from './Filter';
import Favorites from './Favorites';
import CounterCurrencyList from './CounterCurrencyList';
import ActiveCurrencyPair from './ActiveCurrencyPair';
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
const Header = styled.div`
  padding: 0 20px;
`;
const Upper = styled.div`
  border-bottom: 1px solid #d5e0e4;
  display: flex;
  padding-bottom: 14px;
  align-items: center;
`;
const Lower = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Body = styled.div``;

export default class extends Component {
  state = {};

  render() {
    return (
      <Wrap>
        <Title>Currency Pairs</Title>
        <Header>
          <Upper>
            <ActiveCurrencyPair />
            <Filter />
          </Upper>
          <Lower>
            <Favorites />
            <CounterCurrencyList />
          </Lower>
        </Header>
        <Body>
          <CurrencyList />
        </Body>
      </Wrap>
    );
  }
}
