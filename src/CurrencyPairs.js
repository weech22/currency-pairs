import React, { Component } from 'react';
import styled from 'styled-components';
import { withCookies } from 'react-cookie';
import fetch from 'node-fetch';
import Header from './Header';
import CurrencyList from './CurrencyList';

const Wrap = styled.div`
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 20px 30px 0 rgba(83, 98, 104, 0.1);
  max-width: 449px;
`;

const Title = styled.h1`
  font-family: 'Museo Sans', 'sans-serif';
  font-size: 14px;
  font-weight: bold;
  color: #303a4f;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  padding-left: 17px;
  padding-top: 29px;
  margin: 0;
  margin-bottom: 15px;
`;

const Body = styled.div`
  margin-top: 20px;
`;

const isFavorite = (favorite, pairInfo) => {
  const baseCurrency = pairInfo.currency_codes[0];
  const counterCurrency = pairInfo.currency_codes[1];
  const pair = `${baseCurrency}/${counterCurrency}`;

  return favorite.indexOf(pair) >= 0;
};

class CurrencyPairs extends Component {
  state = {
    data: [],
    activePair: {
      // TODO: select first instead
      baseCurrency: 'XNT',
      counterCurrency: 'BTC',
    },
    popularCounterCurrencies: [],
    showFavoriteOnly: false,
    selectedCounterCurrency: null,
    favorite: [],
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

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

  onFilterResultClick = result => {
    const selectedPair = {
      baseCurrency: result.substring(0, result.indexOf('/')),
      counterCurrency: result.substring(result.indexOf('/') + 1),
    };

    this.setState({
      activePair: selectedPair,
      selectedCounterCurrency: selectedPair.counterCurrency,
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

    this.interval = setInterval(
      () =>
        fetch(url)
          .then(response => response.json())
          .then(data => this.setState({ data })),
      10000
    );
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

    const currencyList = showFavoriteOnly
      ? data.filter(pair => isFavorite(favorite, pair))
      : data;

    return (
      <Wrap>
        <Title>Currency Pairs</Title>
        <Header
          onFilterResultClick={this.onFilterResultClick}
          activePair={activePair}
          counterCurrencyList={popularCounterCurrencies}
          counterCurrency={selectedCounterCurrency}
          onCounterCurrencyClick={this.onCounterCurrencyClick}
          toggleFavoriteOnly={this.toggleFavoriteOnly}
          showFavoriteOnly={showFavoriteOnly}
        />
        <Body>
          <CurrencyList
            currencyList={currencyList}
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
