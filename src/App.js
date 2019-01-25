import React, { Component } from 'react';
import styled from 'styled-components';
import CurrencyPairs from './CurrencyPairs';

const Wrap = styled.div`
  background: #f0f5f7;
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;

class App extends Component {
  state = {};

  render() {
    return (
      <Wrap>
        <CurrencyPairs />
      </Wrap>
    );
  }
}

export default App;
