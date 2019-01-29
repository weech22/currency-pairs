import React from 'react';
import styled from 'styled-components';
import { Star } from '../UI/styles';

const Wrap = styled.div`
  display: flex;
  align-items: center;
`;

const Caption = styled.span`
  margin-left: 9px;
  font-family: 'Museo Sans', 'sans-serif';
  font-size: 14px;
  line-height: 40px;
  cursor: pointer;
  &:hover {
    color: #33b84c;
  }
`;

export default ({ onClick }) => (
  <Wrap>
    <Star isFavorite />
    <Caption onClick={onClick}>Favorites</Caption>
  </Wrap>
);
