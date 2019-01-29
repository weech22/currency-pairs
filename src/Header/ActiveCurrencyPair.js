import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  flex-basis: 30%;
  flex-grow: 1;
`;

const BaseCurrency = styled.span`
font-family: 'Museo Sans', 'sans-serif';
  font-size: ${({ activePair }) =>
    (activePair.baseCurrency + activePair.counterCurrency).length >= 7
      ? '22px'
      : '24px'}

  color: #303a4f;
  line-height: 24px;
  letter-spacing: 2.4px;
  font-weight: bold;
`;

const CounterCurrency = styled.span`
font-family: 'Museo Sans', 'sans-serif';
  font-size: ${({ activePair }) =>
    (activePair.baseCurrency + activePair.counterCurrency).length >= 7
      ? '14px'
      : '16px'}
  color: #303a4f;

  line-height: 24px;
  letter-spacing: 1.6px;
  border-bottom: 1px solid rgba(48,58,79,0.5);
`;

export default ({ activePair }) => (
  <Wrap>
    <BaseCurrency activePair={activePair}>
      {activePair.baseCurrency}
    </BaseCurrency>
    {'/ '}
    <CounterCurrency activePair={activePair}>
      {`${activePair.counterCurrency}`}
    </CounterCurrency>
  </Wrap>
);
