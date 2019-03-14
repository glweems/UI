import React, { Component } from 'react';
import styled from 'styled-components';
import Theme from '../Theme';

const Div = styled.div`
  height: 100vh;
  min-width: 100%;
  :first-child {
    background: ${Theme.colors.red};
    height: 50vh;
    border-bottom: 20px solid black;
  }
  position: fixed;
  top: 0px;
  left: 0;
  z-index: -1;
`;

export default class Sticky extends Component {
  render() {
    return (
      <Div>
        <div />
      </Div>
    );
  }
}
