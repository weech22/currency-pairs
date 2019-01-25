import React, { Component } from 'react';
import styled from 'styled-components';
import { withCookies, Cookies } from 'react-cookie';
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

//cookies.get('favorite')
//cookies.set('favorite', favorite, { path: '/' });

class CurrencyPairs extends Component {
  state = {
    data: [],
    activePair: {
      baseCurrency: 'RUB',
      counterCurrency: 'UAH',
    },
    popularCounterCurrencies: [],
    showFavoriteOnly: false,
  };

  onCounterCurrencyClick = counterCurrency => {
    this.setState(prevState => ({
      activePair: {
        ...prevState.activePair,
        counterCurrency,
      },
    }));
  };

  toggleFavoriteOnly = showFavoriteOnly => {
    this.setState({ showFavoriteOnly });
  };

  onListRowClick = baseCurrency => {
    this.setState(prevState => ({
      activePair: {
        ...prevState.activePair,
        baseCurrency,
      },
    }));
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

        const counterCurrency = popularCounterCurrencies[0];

        this.setState(prevState => ({
          activePair: {
            ...prevState.activePair,
            counterCurrency,
          },
          data,
          popularCounterCurrencies,
        }));
      });

    // recieve favorites
  };

  render() {
    const {
      activePair,
      popularCounterCurrencies,
      activePair: { counterCurrency },
      showFavoriteOnly,
    } = this.state;

    const { cookies } = this.props;

    return (
      <Wrap>
        <Title>Currency Pairs</Title>
        <Header
          activePair={activePair}
          counterCurrencyList={popularCounterCurrencies}
          counterCurrency={counterCurrency}
          onCounterCurrencyClick={this.onCounterCurrencyClick}
          toggleFavoriteOnly={this.toggleFavoriteOnly}
          showFavoriteOnly={showFavoriteOnly}
        />
        <Body>
          <CurrencyList
            showFavoriteOnly={showFavoriteOnly}
            counterCurrency={counterCurrency}
            onListRowClick={this.onListRowClick}
          />
        </Body>
      </Wrap>
    );
  }
}

export default withCookies(CurrencyPairs);
