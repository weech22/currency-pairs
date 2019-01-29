import React, { Component } from 'react';
import styled from 'styled-components';
import { withCookies } from 'react-cookie';
import FavoriteButton from './FavoriteButton';

const TableRow = styled.tr`
  display: flex;
  align-items: center;

  background-color: ${props => (props.index % 2 === 0 ? 'white' : '#f0f5f7')};
  color: #303a4f;
  &:hover {
    background-color: #c6efff;
    cursor: pointer;
    opacity: 0.8;
  }
`;

const MarketCell = styled.td`
  padding: 2px 0;
  font-family: 'Museo Sans', 'sans-serif';

  font-size: 12px;
  font-weight: bold;
  line-height: 3.13;
  letter-spacing: 0.2px;
  width: 23%;
`;

const NumberCell = styled.td`
  font-family: 'Museo Sans', 'sans-serif';

  font-weight: 500;
  font-size: 12px;
  line-height: 3.13;
  letter-spacing: 0.2px;
  width: 23%;
  padding: 2px 0;
`;

const ChangeCell = styled.td`
  font-family: 'Museo Sans', 'sans-serif';

  font-size: 11px;
  line-height: 3.36;
  letter-spacing: 0.2px;
  color: ${props => (props.change > 0 ? '#33b84c' : '#ff4b67')};
  width: 23%;
  padding: 2px 0;
`;

const StarCell = styled.td`
  padding: 2px 0;
  padding-left: 2px;
  padding-right: 10px;
  text-align: right;
  width: 8%;
`;

const immutableDelete = (arr, i) => arr.slice(0, i).concat(arr.slice(i + 1));
const immutablePush = (arr, a) => [].concat(arr, a);

class CurrencyListRow extends Component {
  state = {};

  toggleFavorite = e => {
    const {
      favoriteHandler,
      favorite,
      cookies,
      baseCurrency,
      counterCurrency,
      isFavorite,
    } = this.props;
    e.stopPropagation();
    const newPair = `${baseCurrency}/${counterCurrency}`;

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
            onClick={this.toggleFavorite}
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
