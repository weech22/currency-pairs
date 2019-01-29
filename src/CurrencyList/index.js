import React from 'react';
import styled from 'styled-components';
import ScrollArea from 'react-scrollbar';
import TableRow from './CurrencyListRow';
import {
  Star,
  StarCell,
  TableCell,
  scrollbarStyles,
  containerStyles,
} from '../UI/styles';

const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
`;

const HeaderCell = styled(TableCell)`
  font-weight: bold;
`;

const StyledStarCell = styled(StarCell)`
  padding: 6px 10px 0 0;
`;

const HeaderRow = styled.tr`
  display: flex;
  align-items: center;
  color: #303a4f;
  line-height: 24px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  background-color: #e2eaed;
`;

const TBody = styled(ScrollArea)``;

const isFavorite = (favorite, pairInfo) => {
  const baseCurrency = pairInfo.currency_codes[0];
  const counterCurrency = pairInfo.currency_codes[1];
  const pair = `${baseCurrency}/${counterCurrency}`;

  return favorite.indexOf(pair) >= 0;
};

export default ({
  favoriteHandler,
  counterCurrency,
  onListRowClick,
  currencyList,
  favorite,
}) => (
  <Table>
    <thead>
      <HeaderRow>
        <StyledStarCell>
          <Star isFavorite />
        </StyledStarCell>
        <HeaderCell>Market</HeaderCell>
        <HeaderCell>Price</HeaderCell>
        <HeaderCell>Vol</HeaderCell>
        <HeaderCell>+/-</HeaderCell>
      </HeaderRow>
    </thead>
    <tbody>
      <ScrollArea
        speed={1}
        className="list-area"
        horizontal={false}
        smoothScrolling
        verticalScrollbarStyle={scrollbarStyles}
        verticalContainerStyle={containerStyles}
      >
        {currencyList
          .filter(pair => pair.currency_codes[1] === counterCurrency)
          .map((pair, i) => (
            <TableRow
              index={i}
              key={pair.vol}
              baseCurrency={pair.currency_codes[0]}
              isFavorite={isFavorite(favorite, pair)}
              pair={pair}
              onClick={onListRowClick}
              counterCurrency={counterCurrency}
              favoriteHandler={favoriteHandler}
              favorite={favorite}
            />
          ))}
      </ScrollArea>
    </tbody>
  </Table>
);
