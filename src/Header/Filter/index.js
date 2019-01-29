import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import enhanceWithClickOutside from 'react-click-outside';
import Dropdown from './Dropdown';
import searchIcon from '../../UI/search.png';
import searchIconActive from '../../UI/search_active.png';

const Wrap = styled.div`
  position: relative;
  flex-basis: 70%;
  flex-shrink: 1;
  display: flex;
`;

const Searchbar = styled.input`
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 13px 30px 13px 19px;
  text-transform: uppercase;
  width: 100%;
  box-sizing: border-box;
  background: 
  ${props => {
    if (props.isOnFocus) {
      if (props.isSearching) {
        return '#e2eaed';
      }
      return `#e2eaed url(${searchIconActive}) no-repeat`;
    }
    return `#f0f5f7 url(${searchIcon}) no-repeat`;
  }}

  background-position: right 20px center;
  font-family: 'Museo Sans', 'sans-serif';
  font-size: 14px;
  font-weight: 300;
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

const search = (data, term) =>
  data
    .map(pair => `${pair.currency_codes[0]}/${pair.currency_codes[1]}`)
    .filter(pair => pair.toLowerCase().search(term.toLowerCase()) !== -1);

class Filter extends Component {
  state = {
    isOnFocus: false,
    isSearching: false,
    value: '',
    isDropdownShown: false,
    data: [],
  };

  onChange = e => {
    const url = 'http://api.mrthefirst.pro/pairs-list/';
    this.setState({ isSearching: true, isDropdownShown: true });
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({ data });
      })
      .then(() => {
        this.setState({ isSearching: false });
      });
    this.setState({ value: e.target.value });
  };

  onFocus = () => {
    this.setState({ isOnFocus: true });
  };

  setSearchingStatus = isSearching => {
    this.setState({ isSearching });
  };

  loseFocus = () => {
    this.setState({ isOnFocus: false, isDropdownShown: false });
  };

  handleClickOutside = () => {
    this.loseFocus();
  };

  render() {
    const { isOnFocus, isSearching, isDropdownShown, value, data } = this.state;
    const { onResultClick } = this.props;
    const results = search(data, value);

    return (
      <Wrap isSearching={isSearching}>
        <Searchbar
          isSearching={isSearching}
          isOnFocus={isOnFocus}
          placeholder={isOnFocus ? '' : 'SEARCH'}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChange={this.onChange}
          value={value}
        />
        {isSearching && <Preloader />}
        {isDropdownShown && (
          <Dropdown
            results={results}
            term={value}
            isSearching={isSearching}
            onClick={onResultClick}
            focusHandler={this.loseFocus}
          />
        )}
      </Wrap>
    );
  }
}

export default enhanceWithClickOutside(Filter);
