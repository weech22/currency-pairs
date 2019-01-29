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

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Preloader = styled.div`
  display: inline-block;
  position: absolute;
  top: 14px;
  right: 20px;
  width: 16px;
  height: 16px;
  background-image: conic-gradient(#303a4f, #e2eaed, #303a4f);
  border-radius: 50%;
  &:after {
    content: '';
    width: 12px;
    height: 12px;
    background-color: #e2eaed;
    position: absolute;
    top: 2px;
    left: 2px;
    border-radius: 50%;
  }
  animation: ${rotate} 2s linear infinite;
`;

export const scrollbarStyles = {
  background: '#a3b4ba',
  width: '5px',
  borderRadius: '2.5px',
};

export const containerStyles = {
  opacity: 1,
  background: 'transparent',
};

export const TableCell = styled.td`
  padding: 2px 0;
  font-family: 'Museo Sans', 'sans-serif';
  font-size: 12px;
  line-height: 3.13;
  letter-spacing: 0.2px;
  width: 23%;
  text-align: left;
`;

export const StarCell = styled.td`
  padding: 2px 10px 2px 2px;
  text-align: right;
  width: 8%;
`;
