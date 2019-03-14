import React, { Component } from 'react';
import styled from 'styled-components';
import Theme, { Device } from './Theme';
import Pokedex from './components/pokdex';
import Sticky from './components/Sticky';
import './scss/App.scss';

const ThunderImg = require('./images/thunder.svg');

// import { Container } from './components';
// import Landing from "./components/Background";

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  background-image: url(${ThunderImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-color: ${Theme.colors.yellow};
`;
const Grid = styled.div`
  margin-top: 4rem;
  border: 10px solid black;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(3, auto);
  @media ${Device.mobile} {
    border-left: none;
    border-right: none;
    border-bottom: none;
    width: 100% !important;
  }
`;

const Nav = styled.div`
  /* align-content: flex-end; */
  grid-row: 1 / 2;
  grid-column: 1 / -1;
  text-align: right;
  width: 100%;
  padding: 0.5rem 0;
  /* margin: 1rem; */
`;
const Banner = styled.div`
  background: rgba(255, 255, 255, 95%);
  grid-column: 1 / -1;
  grid-row: 2 / 3;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 2rem 0;
  * {
    padding: 1rem 0;
  }
  ${Theme.shadow};
`;

const Info = styled.div`
  grid-column: 1 / 7;
  display: flex;
  flex-direction: column;
  button {
    margin: 0 auto;
  }
  justify-content: space-evenly;
  align-items: center;
  @media ${Device.mobile} {
    grid-column: 1 / -1;
    flex-direction: column-reverse;
    background: white;
    padding: 1rem 0;
    ul {
      padding: 1rem 0;
    }
  }
`;

const Graphic = styled.div`
  width: 100%;
  grid-column: 7 / -1;
  display: flex;
  justify-content: center;
  * {
    padding: 1rem;
    margin: 0 auto;
  }
  @media ${Device.mobile} {
    * {
      padding: 1rem 0.5rem;
    }
    grid-column: 1 / -1;
    grid-row: 3/4;
    border-bottom: 10px solid black;
  }
`;

const TextWrapper = styled.div`
  padding: 0 1rem;
  /* font-size: 16px;
font-size: 3.75vw; */
`;
const Title = styled.h1`
  font-family: 'Source Sans Pro';
  font-style: italic;
  font-weight: 900;
  line-height: 0.9;
  font-size: 3.5rem;
  margin-left: 1rem;
  padding: 0;
  @media ${Device.mobile} {
    font-size: 16px;
    font-size: 4vh;
  }
`;

const StartButton = styled.button`
  color: ${Theme.colors.light};
  background: ${Theme.colors.blue};
  font-size: 18px;
  text-transform: uppercase;
  font-family: 'Open Sans';
  font-weight: 300;
  padding: 0.365rem 2rem;
  border-radius: 3px;
  border: none;
  display: flex;
  margin: 0 auto;
`;

const LoginButton = styled.a`
  color: ${Theme.colors.dark};
  margin: 0 0.5rem;
`;

const Subtitle = styled.h4`
  color: ${Theme.colors.grey};
  font-style: italic;
  margin-left: 1.5rem;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sticky />
        <Container className="container">
          <Grid>
            <Nav>
              <LoginButton>Login</LoginButton>
            </Nav>
            <Banner className="banner">
              <TextWrapper>
                <Title>So You Wanna Be A Pokemon Master?</Title>
                <Subtitle>"A Must Have Tool!" - Other Pokemon Masters</Subtitle>
              </TextWrapper>
            </Banner>
            <Info className="container">
              <TextWrapper>
                <ul>
                  <li>Stay up to date with all the latest Pokemon</li>
                  <li>Organize Pokemon The way you most prefer</li>
                  <li>Compare stats</li>
                </ul>
              </TextWrapper>
              <TextWrapper>
                <StartButton>Get Started</StartButton>
              </TextWrapper>
            </Info>
            <Graphic className="graphic">
              <Pokedex />
            </Graphic>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
