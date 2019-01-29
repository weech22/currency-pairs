import React, { Component } from 'react';
import styled from 'styled-components';
import ScrollArea from 'react-scrollbar';
import TableRow from './CurrencyListRow';
import { Star } from '../UI/styles';
import '../UI/scrollbar.css';

const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
`;

const HeaderCell = styled.td`
  font-family: 'Museo Sans', 'sans-serif';
  font-weight: bold;
  padding: 8px 0;
  width: 23%;
  text-align: left;
`;

const StarCell = styled.td`
  text-align: right;
  padding-right: 10px;
  width: 8%;
  padding-top: 6px;
`;

const HeaderRow = styled.tr`
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 24px;
  color: #303a4f;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  background-color: #e2eaed;
`;

const scrollbarStyles = {
  background: '#a3b4ba',
  width: '5px',
  borderRadius: '2.5px',
};

const containerStyles = {
  opacity: 1,
  background: 'transparent',
};

const TBody = styled.tbody``;

const THead = styled.thead``;

const isFavorite = (favorite, pairInfo) => {
  const baseCurrency = pairInfo.currency_codes[0];
  const counterCurrency = pairInfo.currency_codes[1];
  const pair = `${baseCurrency}/${counterCurrency}`;

  return favorite.indexOf(pair) >= 0;
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
      <Table>
        <THead>
          <HeaderRow>
            <StarCell>
              <div>
                <Star isFavorite />
              </div>
            </StarCell>
            <HeaderCell>Market</HeaderCell>
            <HeaderCell>Price</HeaderCell>
            <HeaderCell>Vol</HeaderCell>
            <HeaderCell>+/-</HeaderCell>
          </HeaderRow>
        </THead>
        <TBody>
          <ScrollArea
            speed={0.8}
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
        </TBody>
      </Table>
    );
  }
}
