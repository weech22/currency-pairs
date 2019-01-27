import React, { Component } from 'react';
import styled from 'styled-components';
import TableRow from './CurrencyListRow';

const Wrap = styled.div``;

const Table = styled.table`
  border-collapse: collapse;
`;

const HeaderCell = styled.td`
  padding: 8px 0;
  padding-left: 10px;
  min-width: 80px;
`;

const StarCell = styled.td`
  text-align: right;
  padding-left: 5px;
  min-width: 30px;
`;

const Tr = styled.tr`
  background-color: #e2eaed;
  text-transform: uppercase;
  color: #303a4f;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: 0.6px;
  display: block;
  position: relative;
`;

const TBody = styled.tbody`
  display: block;
  overflow: overlay;
  height: 298px;
`;

const Star = () => (
  <svg width="16" height="15" viewBox="0 0 16 15" fill="#303a4f">
    <path
      d="M2189.99,2283.71l-5.05,3.54,1.74,5.73-4.84-3.55-5.04,3.56,2.06-5.73-4.87-3.52h6.12l2.04-5.74,1.72,5.73Z"
      transform="translate(-2174 -2278)"
    />
  </svg>
);

const isFavorite = (favorite, pairInfo) => {
  const baseCurrency = pairInfo.currency_codes[0];
  const counterCurrency = pairInfo.currency_codes[1];

  const pair = `${baseCurrency}|${counterCurrency}`;

  if (favorite.indexOf(pair) >= 0) {
    return true;
  }
  return false;
};

export default class extends Component {
  state = {};

  render() {
    const {
      showFavoriteOnly,
      favoriteHandler,
      counterCurrency,
      onListRowClick,
      data,
      favorite,
    } = this.props;

    const currencyList = showFavoriteOnly
      ? data.filter(pair => isFavorite(favorite, pair))
      : data;

    return (
      <Wrap className="table">
        <Table>
          <thead>
            <Tr>
              <StarCell>
                <Star />
              </StarCell>
              <HeaderCell>Market</HeaderCell>
              <HeaderCell>Price</HeaderCell>
              <HeaderCell>Vol</HeaderCell>
              <HeaderCell>+/-</HeaderCell>
            </Tr>
          </thead>
          <TBody>
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
          </TBody>
        </Table>
      </Wrap>
    );
  }
}
