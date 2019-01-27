import React, { Component } from 'react';
import styled from 'styled-components';

const Wrap = styled.button`
  appearance: none;
  border: none;
  outline: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
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

export default class extends Component {
  state = {};

  onClick = () => {
    // Add to favorite or remove
  };

  render() {
    const { isFavorite, onClick } = this.props;
    return <Wrap onClick={onClick}>{Star(isFavorite)}</Wrap>;
  }
}
