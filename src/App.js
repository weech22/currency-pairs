import React, { Component } from 'react';
import styled from 'styled-components';
import { CookiesProvider } from 'react-cookie';
import CurrencyPairs from './CurrencyPairs';
import './Fonts/font.css';

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
        <CookiesProvider>
          <CurrencyPairs />
        </CookiesProvider>
      </Wrap>
    );
  }
}

export default App;
