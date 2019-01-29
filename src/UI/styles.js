import React from 'react';
import styled, { keyframes } from 'styled-components';

export const Star = ({ isFavorite }) => (
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
