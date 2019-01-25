import React, { Component } from 'react';
import styled from 'styled-components';

const TableRow = styled.tr`
  &:hover {
    background-color: #c6efff;
    cursor: pointer;
    opacity: 0.8;
  }
  background-color: ${props => (props.index % 2 === 0 ? 'white' : '#f0f5f7')};
  color: #303a4f;
`;

const Star = isFavorite => (
  <svg
    width="16"
    height="15"
    viewBox="0 0 16 15"
    fill={isFavorite ? '#303a4f' : '#cdd9dd'}
  >
    <path
      d="M2189.99,2283.71l-5.05,3.54,1.74,5.73-4.84-3.55-5.04,3.56,2.06-5.73-4.87-3.52h6.12l2.04-5.74,1.72,5.73Z"
      transform="translate(-2174 -2278)"
    />
  </svg>
);

const MarketCell = styled.td`
  line-height: 3.13;
  letter-spacing: 0.2px;
  font-size: 12px;
  font-weight: 700;
  padding-left: 10px;
`;
const NumberCell = styled.td`
  line-height: 3.13;
  letter-spacing: 0.2px;
  font-weight: 500;
  font-size: 12px;
  padding-left: 10px;
  font-family: 'Museo Sans Cyrl', sans-serif;
`;
const ChangeCell = styled.td`
  line-height: 3.36;
  font-weight: 500;
  letter-spacing: 0.2px;
  font-size: 11px;
  padding-left: 10px;
  color: ${props => (props.change > 0 ? '#33b84c' : '#ff4b67')};
`;
const StarCell = styled.td`
  text-align: right;
`;

export default class extends Component {
  state = {};

  render() {
    const { isFavorite, price, vol, change, market, index } = this.props;
    return (
      <TableRow index={index}>
        <StarCell>{Star(isFavorite)}</StarCell>
        <MarketCell>{market}</MarketCell>
        <NumberCell>{price.toFixed(4)}</NumberCell>
        <NumberCell>{vol.toFixed(4)}</NumberCell>
        <ChangeCell change={change}>{`${Math.abs(change)}%`}</ChangeCell>
      </TableRow>
    );
  }
}
