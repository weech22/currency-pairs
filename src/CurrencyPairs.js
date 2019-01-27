import React, { Component } from 'react';
import styled from 'styled-components';
import { withCookies } from 'react-cookie';
import Header from './Header';

import CurrencyList from './CurrencyList';

const Wrap = styled.div`
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 20px 30px 0 rgba(83, 98, 104, 0.1);
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

class CurrencyPairs extends Component {
  state = {
    data: [],
    activePair: {
      // TODO: select first instead
      baseCurrency: 'RUB',
      counterCurrency: 'UAH',
    },
    popularCounterCurrencies: [],
    showFavoriteOnly: false,
    selectedCounterCurrency: null,
    favorite: [],
  };

  onCounterCurrencyClick = selectedCounterCurrency => {
    this.setState({ selectedCounterCurrency });
  };

  toggleFavoriteOnly = showFavoriteOnly => {
    this.setState({ showFavoriteOnly });
  };

  favoriteHandler = () => {
    const { cookies } = this.props;
    const favorite = cookies.get('favorite');

    this.setState({ favorite });
  };

  onListRowClick = baseCurrency => {
    const { selectedCounterCurrency: counterCurrency } = this.state;
    this.setState({
      activePair: {
        baseCurrency,
        counterCurrency,
      },
    });
  };

  componentDidMount = () => {
    const { cookies } = this.props;
    const favorite = cookies.get('favorite');
    this.setState({ favorite });

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

        const selectedCounterCurrency = popularCounterCurrencies[0];

        this.setState({
          data,
          popularCounterCurrencies,
          selectedCounterCurrency,
        });
      });
  };

  render() {
    const {
      activePair,
      selectedCounterCurrency,
      popularCounterCurrencies,
      showFavoriteOnly,
      data,
      favorite,
    } = this.state;

    return (
      <Wrap>
        <Title>Currency Pairs</Title>
        <Header
          data={data}
          activePair={activePair}
          counterCurrencyList={popularCounterCurrencies}
          counterCurrency={selectedCounterCurrency}
          onCounterCurrencyClick={this.onCounterCurrencyClick}
          toggleFavoriteOnly={this.toggleFavoriteOnly}
          showFavoriteOnly={showFavoriteOnly}
        />
        <Body>
          <CurrencyList
            data={data}
            showFavoriteOnly={showFavoriteOnly}
            counterCurrency={selectedCounterCurrency}
            onListRowClick={this.onListRowClick}
            favoriteHandler={this.favoriteHandler}
            favorite={favorite}
          />
        </Body>
      </Wrap>
    );
  }
}

export default withCookies(CurrencyPairs);
