import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import ScrollArea from 'react-scrollbar';
import sadFace from '../../UI/sad_face.png';
import '../../UI/scrollbar.css';

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
  margin: 20px 0;
  left: 21px;
  top: 3px;
  width: 16px;
  height: 16px;
  background-image: conic-gradient(#303a4f, #e2eaed, #303a4f);
  border-radius: 50%;
  &:after {
    content: '';
    width: 12px;
    height: 12px;
    background-color: white;
    position: absolute;
    top: 2px;
    left: 2px;
    border-radius: 50%;
  }
  animation: ${rotate} 2s linear infinite;
`;

const Wrap = styled.div`
  width: 100%;
  z-index: 10;
  background-color: white;
  position: absolute;
  top: 46px;

  border-radius: 5px;
  box-shadow: 0px 10px 30px 0 rgba(111, 124, 151, 0.2);
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ListRow = styled.div`
  font-family: 'Museo Sans', 'sans-serif';
  text-transform: uppercase;
  padding-left: 18px;
  cursor: pointer;
  &:hover {
    background-color: #c6efff;
    opacity: 0.5;
  }
`;

const Match = styled.span`
  font-family: 'Museo Sans', 'sans-serif';
  color: #1e9e36;
  font-size: 14px;
  font-weight: 300;
  line-height: 2.86;
`;

const Text = styled.span`
  font-family: 'Museo Sans', 'sans-serif';
  color: #303a4f;
  font-size: 14px;
  font-weight: 300;
  line-height: 2.86;
`;

const NoMatch = styled.div`
  font-family: 'Museo Sans', 'sans-serif';
  font-size: 14px;
  line-height: 1.71;
  color: rgba(48, 58, 79, 0.3);
  padding: 23px 0;
  padding-left: 23px;
  padding-right: 21px;
  display: flex;
  justify-content: space-between;
`;

const scrollbarStyles = {
  background: '#a3b4ba',
  width: '5px',
  borderRadius: '2.5px',
};

const containerStyles = {
  opacity: 1,
  background: 'transparent',
};

export default class extends Component {
  state = {};

  // onClick also set Filter`s value to result

  render() {
    const { results, term, isSearching, onClick, focusHandler } = this.props;
    return (
      <Wrap isSearching={isSearching}>
        {isSearching && <Preloader />}
        {results.length === 0 && term && !isSearching && (
          <NoMatch>
            <span>Ничего не найдено</span>
            <img src={sadFace} alt=":(" />
          </NoMatch>
        )}
        <ScrollArea
          speed={0.8}
          className="dropdown-area"
          horizontal={false}
          smoothScrolling
          verticalScrollbarStyle={scrollbarStyles}
          verticalContainerStyle={containerStyles}
        >
          {results &&
            term &&
            !isSearching &&
            results.map(result => (
              <ListRow
                key={Math.random(999999)}
                onClick={() => {
                  onClick(result);
                  focusHandler();
                }}
              >
                <Text>
                  {result.substring(0, result.toLowerCase().indexOf(term))}
                </Text>
                <Match>{term}</Match>
                <Text>
                  {result.substring(
                    result.toLowerCase().indexOf(term) + term.length
                  )}
                </Text>
              </ListRow>
            ))}
        </ScrollArea>
      </Wrap>
    );
  }
}
