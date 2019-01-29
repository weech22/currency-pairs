import React, { Component } from 'react';
import styled from 'styled-components';
import enhanceWithClickOutside from 'react-click-outside';
import fetch from 'node-fetch';
import Dropdown from './Dropdown';
import { Preloader } from '../../UI/styles';
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
  flex-shrink: 1;
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
    selectedPair: null,
  };

  onChange = e => {
    const url = 'http://api.mrthefirst.pro/pairs-list/';

    this.setState({
      isSearching: true,
      isDropdownShown: true,
      value: e.target.value,
    });

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({ data });
      })
      .then(() => {
        this.setState({ isSearching: false });
      });
  };

  onFocus = () => {
    const { selectedPair } = this.state;
    if (selectedPair) {
      this.setState({ value: '' });
    }
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

  setActivePair = selectedPair => {
    this.setState({ selectedPair, value: selectedPair });
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
            setActivePair={this.setActivePair}
          />
        )}
      </Wrap>
    );
  }
}

export default enhanceWithClickOutside(Filter);
