import React, { Component } from 'react';
import styled from 'styled-components';
import sadFace from '../UI/sad_face.png';

const Wrap = styled.div`
  z-index: 10;
  height: auto;
  background-color: white;
  position: absolute;
  top: 46px;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 10px 30px 0 rgba(111, 124, 151, 0.2);
`;

const ListRow = styled.div`
  text-transform: uppercase;
  padding-left: 18px;
  &:hover {
    background-color: #c6efff;
    opacity: 0.5;
  }
`;

const Match = styled.span`
  color: #1e9e36;
  font-size: 14px;
  font-weight: 300;
  line-height: 2.86;
`;

const Text = styled.span`
  color: #303a4f;
  font-size: 14px;
  font-weight: 300;
  line-height: 2.86;
`;

const NoMatch = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.71;
  color: rgba(48, 58, 79, 0.3);
  padding: 23px 0;
  padding-left: 23px;
  padding-right: 21px;
  display: flex;
  justify-content: space-between;
`;

export default class extends Component {
  state = {};

  render() {
    const { results, term } = this.props;

    return (
      <Wrap>
        {results.length === 0 && term && (
          <NoMatch>
            <span>Ничего не найдено</span>
            <img src={sadFace} alt=":(" />
          </NoMatch>
        )}
        {results &&
          term &&
          results.map(result => (
            <ListRow key={Math.random(999999)}>
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
      </Wrap>
    );
  }
}
