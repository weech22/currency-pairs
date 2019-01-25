import React, { Component } from 'react';
import styled from 'styled-components';

const Wrap = styled.button`
  appearance: none;
  background-color: white;
  border: none;
  outline: none;
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
  state = { isActive: false };

  onClick = () => {
    const { isActive } = this.state;
    this.setState({ isActive: !isActive });
  };

  render() {
    const { isActive } = this.state;
    const { children } = this.props;
    return (
      <Wrap isActive={isActive} onClick={this.onClick}>
        {children}
      </Wrap>
    );
  }
}
