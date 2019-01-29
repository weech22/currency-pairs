import React from 'react';
import styled from 'styled-components';

const Wrap = styled.button`
  appearance: none;
  border: none;
  outline: none;
  background-color: white;
  &:hover {
    color: ${props => (props.isActive ? '#303a4f' : '#33b84c')};
  }
  padding: ${props => (props.isActive ? '0 5px' : '0 4px')};
  color: ${props => (props.isActive ? '#303a4f' : '#d5e0e4')};
  border-bottom: ${props =>
    props.isActive ? '3px solid #303a4f' : '1px solid #d5e0e4'};
  padding-bottom: ${props => (props.isActive ? '6px' : '9px')};
  font-weight: ${props => (props.isActive ? 'normal' : '300')}
  font-family: 'Museo Sans', 'sans-serif';
  font-size: 14px;
  cursor: pointer;
`;

export default ({ children, isActive, onClick }) => (
  <Wrap isActive={isActive} onClick={() => onClick(children)}>
    {children}
  </Wrap>
);
