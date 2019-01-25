import React, { Component } from 'react';
import styled from 'styled-components';
import TableRow from './CurrencyListRow';
import data from './data';
import star from './star_favorites.svg';

const Wrap = styled.div`
  margin-top: 20px;
  height: 438px;
  overflow: overlay;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;
const THead = styled.thead`
  text-align: left;
`;
const TBody = styled.tbody``;

const Th = styled.th``;

const Tr = styled.tr`
  background-color: #e2eaed;
  text-transform: uppercase;
  color: #303a4f;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: 0.6px;
`;

const StarCell = styled.th`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StarImg = styled.img`
  display: block;
`;

export default class extends Component {
  state = {};

  render() {
    return (
      <Wrap className="table">
        <Table>
          <THead>
            <Tr>
              <StarCell>{<StarImg src={star} alt="favorite" />}</StarCell>
              <Th>Market</Th>
              <Th>Price</Th>
              <Th>Vol</Th>
              <Th>+/-</Th>
            </Tr>
          </THead>
          <TBody>
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
          </TBody>
        </Table>
      </Wrap>
    );
  }
}
