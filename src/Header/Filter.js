import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Dropdown from './Dropdown';
import search from '../UI/search.png';
import searchActive from '../UI/search_active.png';

const Wrap = styled.div`
  margin-right: ${props => (props.isSearching ? '-16px' : '0')};
`;

const Filter = styled.input`
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 0 30px 0 19px;

  background: 
  
  ${props => {
    if (props.isOnFocus) {
      if (props.isSearching) {
        return '#e2eaed';
      }
      return `#e2eaed url(${searchActive}) no-repeat 95% center`;
    }
    return `#f0f5f7 url(${search}) no-repeat 95% center`;
  }}

  font-size: 14px;
  font-weight: 300;
  line-height: 2.86;
  text-align: left;
  color: #303a4f

  &::placeholder {
    opacity: 0.5;
    font-size: 10px;
    font-weight: bold;
    line-height: 2.4;
    letter-spacing: 1px;
    text-align: left;
    color: rgba(48, 58, 79, 0.5);
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Preloader = styled.div`
  display: inline-block;
  position: relative;
  right: 27px;
  top: 3px;
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

export default class extends Component {
  state = {
    isOnFocus: false,
    isSearching: false,
    value: '',
    isDropdownShown: true,
  };

  onChange = e => {
    this.setState({ value: e.target.value, isSearching: true });
    // search
  };

  onFocus = () => {
    this.setState({ isOnFocus: true });
  };

  onBlur = () => {
    this.setState({ isOnFocus: false, isSearching: false });
  };

  render() {
    const { isOnFocus, isSearching, value, isDropdownShown } = this.state;
    return (
      <Wrap isSearching={isSearching}>
        <Filter
          isSearching={isSearching}
          isOnFocus={isOnFocus}
          placeholder={isOnFocus ? '' : 'SEARCH'}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          onChange={this.onChange}
          value={value}
        />
        {isSearching && <Preloader />}
        {isDropdownShown && <Dropdown />}
      </Wrap>
    );
  }
}
