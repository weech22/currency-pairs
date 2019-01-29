import React from 'react';
import styled from 'styled-components';

import { CookiesProvider } from 'react-cookie';
import CurrencyPairs from './CurrencyPairs';
import './Fonts/font.css';

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  background: #f0f5f7;
  height: 96vh;
`;

export default () => (
  <Wrap>
    <CookiesProvider>
      <CurrencyPairs />
    </CookiesProvider>
  </Wrap>
);
