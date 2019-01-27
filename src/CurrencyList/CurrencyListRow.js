import React, { Component } from 'react';
import styled from 'styled-components';
import { withCookies } from 'react-cookie';
import FavoriteButton from './FavoriteButton';

const TableRow = styled.tr`
  &:hover {
    background-color: #c6efff;
    cursor: pointer;
    opacity: 0.8;
  }
  background-color: ${props => (props.index % 2 === 0 ? 'white' : '#f0f5f7')};
  color: #303a4f;
`;

const MarketCell = styled.td`
  line-height: 3.13;
  letter-spacing: 0.2px;
  font-size: 12px;
  font-weight: 700;
  padding-left: 10px;
  min-width: 80px;
`;
const NumberCell = styled.td`
  line-height: 3.13;
  letter-spacing: 0.2px;
  font-weight: 500;
  font-size: 12px;
  padding-left: 10px;
  font-family: 'Museo Sans Cyrl', sans-serif;
  min-width: 80px;
`;
const ChangeCell = styled.td`
  min-width: 80px;
  line-height: 3.36;
  font-weight: 500;
  letter-spacing: 0.2px;
  font-size: 11px;
  padding-left: 10px;
  color: ${props => (props.change > 0 ? '#33b84c' : '#ff4b67')};
`;
const StarCell = styled.td`
  text-align: right;
  min-width: 35px;
`;

function immutableDelete(arr, index) {
  return arr.slice(0, index).concat(arr.slice(index + 1));
}

const immutablePush = (arr, newEntry) => {
  return [].concat(arr, newEntry);
};

class CurrencyListRow extends Component {
  state = {};

  favoriteHandler = () => {
    const {
      favoriteHandler,
      favorite,
      cookies,
      baseCurrency,
      counterCurrency,
      isFavorite,
    } = this.props;

    const newPair = `${baseCurrency}|${counterCurrency}`;

    const newFavorite = isFavorite
      ? immutableDelete(favorite, favorite.indexOf(newPair))
      : immutablePush(favorite, newPair);

    cookies.set('favorite', newFavorite, { path: '/' });

    favoriteHandler();
  };

  render() {
    const {
      baseCurrency,
      index,
      onClick,
      isFavorite,
      pair: { price, vol, change },
    } = this.props;

    return (
      <TableRow index={index} onClick={() => onClick(baseCurrency)}>
        <StarCell>
          <FavoriteButton
            isFavorite={isFavorite}
            onClick={this.favoriteHandler}
          />
        </StarCell>
        <MarketCell>{baseCurrency}</MarketCell>
        <NumberCell>{price.toFixed(4)}</NumberCell>
        <NumberCell>{vol.toFixed(4)}</NumberCell>
        <ChangeCell change={change}>{`${Math.abs(change)}%`}</ChangeCell>
      </TableRow>
    );
  }
}

export default withCookies(CurrencyListRow);
