import React, { Component } from 'react';
import styled from 'styled-components';
import TableRow from './CurrencyListRow';
import data from '../data';

const Wrap = styled.div`
  margin-top: 20px;
  height: 400px;
  overflow: overlay;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const HeaderCell = styled.td`
  padding: 8px 0;
  padding-left: 10px;
`;

const StarCell = styled.td`
  text-align: right;
  padding-left: 5px;
`;

const Tr = styled.tr`
  background-color: #e2eaed;
  text-transform: uppercase;
  color: #303a4f;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: 0.6px;
`;

const Star = () => (
  <svg width="16" height="15" viewBox="0 0 16 15" fill="#303a4f">
    <path
      d="M2189.99,2283.71l-5.05,3.54,1.74,5.73-4.84-3.55-5.04,3.56,2.06-5.73-4.87-3.52h6.12l2.04-5.74,1.72,5.73Z"
      transform="translate(-2174 -2278)"
    />
  </svg>
);

export default class extends Component {
  state = {};

  render() {
    return (
      <Wrap className="table">
        <Table>
          <Tr>
            <StarCell>
              <Star />
            </StarCell>
            <HeaderCell>Market</HeaderCell>
            <HeaderCell>Price</HeaderCell>
            <HeaderCell>Vol</HeaderCell>
            <HeaderCell>+/-</HeaderCell>
          </Tr>

          {data.map((x, i) => (
            <TableRow
              index={i}
              key={x.vol}
              isFavorite={true}
              market={x.currency_codes[0]}
              price={x.price}
              vol={x.vol}
              change={x.change}
            />
          ))}
        </Table>
      </Wrap>
    );
  }
}
