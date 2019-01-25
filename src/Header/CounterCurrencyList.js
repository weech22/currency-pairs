import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './Button';

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 14px;
`;

export default class extends Component {
  state = {
    currencies: ['BTC', 'XNT', 'EUR', 'ERT', 'LTC'],
    selectedCurrency: 'BTC',
  };

  onClick = selectedCurrency => {
    this.setState({ selectedCurrency });
  };

  render() {
    const { currencies, selectedCurrency } = this.state;
    return (
      <Wrap>
        {currencies.map(currency => (
          <Button
            isActive={selectedCurrency === currency}
            onClick={this.onClick}
          >
            {currency}
          </Button>
        ))}
      </Wrap>
    );
  }
}
