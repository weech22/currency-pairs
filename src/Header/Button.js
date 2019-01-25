import React, { Component } from 'react';
import styled from 'styled-components';

const Wrap = styled.button`
  appearance: none;
  background-color: white;
  border: none;
  outline: none;
  &:hover {
    color: ${props => (props.isActive ? '#303a4f' : '#33b84c')};
  }
  padding: 0 ${props => (props.isActive ? '5px' : '4px')};
  color: ${props => (props.isActive ? '#303a4f' : '#d5e0e4')};
  border-bottom: ${props =>
    props.isActive ? '3px solid #303a4f' : '1px solid #d5e0e4'};
  padding-bottom: ${props => (props.isActive ? '9px' : '11px')};

  font-weight: 300;
  font-size: 14px;
  cursor: pointer;
`;

export default class extends Component {
  state = {};

  render() {
    const { children, isActive, onClick } = this.props;
    return (
      <Wrap isActive={isActive} onClick={() => onClick(children)}>
        {children}
      </Wrap>
    );
  }
}
