import React, { Component } from 'react';
import styled from 'styled-components';
import star from '../UI/star.svg';

const Wrap = styled.div`
  display: flex;
  align-items: center;
`;
const Caption = styled.span`
  font-size: 14px;
  line-height: 40px;
  font-weight: 300;
  cursor: pointer;
`;

const Star = styled.img`
  margin-right: 9px;
  cursor: pointer;
`;

export default class extends Component {
  state = {};

  render() {
    return (
      <Wrap>
        <Star src={`${star}`} />
        <Caption>Favorites</Caption>
      </Wrap>
    );
  }
}
