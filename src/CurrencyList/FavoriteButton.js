import React from 'react';
import styled from 'styled-components';
import { Star } from '../UI/styles';

const Wrap = styled.button`
  appearance: none;
  border: none;
  outline: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
`;

export default ({ isFavorite, onClick }) => (
  <Wrap onClick={onClick}>
    <Star isFavorite={isFavorite} />
  </Wrap>
);
