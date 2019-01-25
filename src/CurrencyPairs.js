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

const Body = styled.div`
  margin-top: 20px;
`;

export default class extends Component {
  state = {
    data: [],
    activePair: {
      baseCurrency: 'RUB',
      counterCurrency: 'UAH',
    },
    popularCounterCurrencies: [],
    selectedCounterCurrency: null,
  };

  onCounterCurrencyClick = selectedCounterCurrency => {
    this.setState({ selectedCounterCurrency });
  };

  componentDidMount = () => {
    const url = 'http://api.mrthefirst.pro/pairs-list/';
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // Finding TOP5 popular counter currencies
        const popularCounterCurrencies = Object.entries(
          data.reduce((acc, pair) => {
            if (acc[pair.currency_codes[1]]) {
              acc[pair.currency_codes[1]] += 1;
            } else {
              acc[pair.currency_codes[1]] = 1;
            }
            return acc;
          }, {})
        )
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(currency => currency[0]);

        this.setState({ data, popularCounterCurrencies });
      });

    // select first
  };

  render() {
    const {
      activePair,
      popularCounterCurrencies,
      selectedCounterCurrency,
    } = this.state;

    return (
      <Wrap>
        <Title>Currency Pairs</Title>
        <Header
          activePair={activePair}
          counterCurrencyList={popularCounterCurrencies}
          selectedCounterCurrency={selectedCounterCurrency}
          onCounterCurrencyClick={this.onCounterCurrencyClick}
        />
        <Body>
          <CurrencyList />
        </Body>
      </Wrap>
    );
  }
}
