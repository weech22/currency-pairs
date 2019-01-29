import React from 'react';
import styled from 'styled-components';
import ActiveCurrencyPair from './ActiveCurrencyPair';
import Filter from './Filter';
import Favorites from './Favorites';
import CounterCurrencyList from './CounterCurrencyList';

const Wrap = styled.div`
  padding: 0 20px;
`;

const Upper = styled.div`
  display: flex;

  align-items: center;
  padding-bottom: 14px;
  border-bottom: 1px solid #d5e0e4;
`;

const Lower = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default ({
  activePair,
  counterCurrencyList,
  counterCurrency,
  onCounterCurrencyClick,
  toggleFavoriteOnly,
  showFavoriteOnly,
  onFilterResultClick,
}) => (
  <Wrap>
    <Upper>
      <ActiveCurrencyPair activePair={activePair} />
      <Filter onResultClick={onFilterResultClick} />
    </Upper>
    <Lower>
      <Favorites
        onClick={toggleFavoriteOnly}
        showFavoriteOnly={showFavoriteOnly}
      />
      <CounterCurrencyList
        currencies={counterCurrencyList}
        selected={counterCurrency}
        onClick={onCounterCurrencyClick}
      />
    </Lower>
  </Wrap>
);
