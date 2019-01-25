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
  state = {};

  render() {
    const { currencies, selected, onClick } = this.props;
    return (
      <Wrap>
        {currencies.map(currency => (
          <Button
            key={currency}
            isActive={selected === currency}
            onClick={onClick}
          >
            {currency}
          </Button>
        ))}
      </Wrap>
    );
  }
}
