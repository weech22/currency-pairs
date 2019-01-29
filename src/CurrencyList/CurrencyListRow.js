import React, { Component } from 'react';
import styled from 'styled-components';
import { withCookies } from 'react-cookie';
import FavoriteButton from './FavoriteButton';
import { TableCell, StarCell } from '../UI/styles';

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

const MarketCell = styled(TableCell)`
  font-weight: bold;
`;

const NumberCell = styled(TableCell)`
  font-weight: 500;
`;

const ChangeCell = styled(TableCell)`
  font-size: 11px;
  line-height: 3.36;
  color: ${props => (props.change > 0 ? '#33b84c' : '#ff4b67')};
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
