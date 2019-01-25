import React, { Component } from 'react';
import styled from 'styled-components';
import ActiveCurrencyPair from './ActiveCurrencyPair';
import Filter from './Filter';
import Favorites from './Favorites';
import CounterCurrencyList from './CounterCurrencyList';

const Wrap = styled.div`
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

export default class extends Component {
  state = {};

  onChange = () => {};

  render() {
    return (
      <Wrap>
        <Upper>
          <ActiveCurrencyPair />
          <Filter />
        </Upper>
        <Lower>
          <Favorites />
          <CounterCurrencyList />
        </Lower>
      </Wrap>
    );
  }
}
