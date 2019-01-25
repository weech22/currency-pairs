import React, { Component } from 'react';
import styled from 'styled-components';
import star from '../UI/star.svg';

const Wrap = styled.div`
  display: flex;
  align-items: center;
`;

const Caption = styled.span`
  font-size: 14px;
  line-height: 40px;
  font-weight: 300;
  cursor: pointer;
  &:hover {
    color: #33b84c;
  }
`;

const Star = styled.img`
  margin-right: 9px;
  cursor: pointer;
`;

export default class extends Component {
  state = {};

  onClick = () => {
    // toggle list mode
  };

  render() {
    const { onClick, showFavoriteOnly } = this.props;
    return (
      <Wrap onClick={() => onClick(!showFavoriteOnly)}>
        <Star src={`${star}`} />
        <Caption>Favorites</Caption>
      </Wrap>
    );
  }
}
