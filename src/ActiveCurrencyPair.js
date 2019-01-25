import React, { Component } from 'react';
import styled from 'styled-components';

const Wrap = styled.div``;
const BaseCurrency = styled.span`
  font-size: 24px;
  color: #303a4f;
  line-height: 24px;
  letter-spacing: 2.4px;
  font-weight: bold;
`;
const CounterCurrency = styled.span`
  font-size: 16px;
  color: #303a4f;
  line-height: 24px;
  letter-spacing: 1.6px;
`;

export default class extends Component {
  state = {};

  render() {
    return (
      <Wrap>
        <BaseCurrency>XNT</BaseCurrency>
        <CounterCurrency>/BTC</CounterCurrency>
      </Wrap>
    );
  }
}
