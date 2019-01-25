import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div``;

const BaseCurrency = styled.span`
  font-size: ${({ activePair }) =>
    (activePair.baseCurrency + activePair.counterCurrency).length >= 9
      ? '22px'
      : '24px'}

  color: #303a4f;
  line-height: 24px;
  letter-spacing: 2.4px;
  font-weight: bold;
`;

const CounterCurrency = styled.span`
  font-size: ${({ activePair }) =>
    (activePair.baseCurrency + activePair.counterCurrency).length >= 9
      ? '16px'
      : '14px'}
  color: #303a4f;
  line-height: 24px;
  letter-spacing: 1.6px;
`;

export default ({ activePair }) => (
  <Wrap>
    <BaseCurrency activePair={activePair}>
      {activePair.baseCurrency}
    </BaseCurrency>
    <CounterCurrency activePair={activePair}>
      {`/${activePair.counterCurrency}`}
    </CounterCurrency>
  </Wrap>
);
