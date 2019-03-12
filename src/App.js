import React, { Component } from 'react';
import styled from 'styled-components';
import Theme from './Theme';
import './scss/App.scss';
// import Landing from "./components/Background";
const ThunderImg = require('./images/thunder.svg');
const PokedexImg = require('./images/pokedex.svg');

const Background = styled.div`
  height: 100vh;
  width: 100%;
  :first-child {
    background: ${Theme.colors.red};
    height: 50vh;
    border-bottom: 20px solid black;
  }
  position: absolute;
  top: 0px;
  left: 0;
  z-index: -1;
`;

const Content = styled.div`
  border: 20px solid black;
  height: 50rem;
  background: ${Theme.colors.yellow};
  display: grid;
  grid-template-columns: auto 1fr 20%;
  grid-template-rows: 1fr;
  justify-content: center;
  align-items: center;
  .side {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: visible;
  }

  .item {
    overflow: visible;
    background: white;
    height: 95%;
    max-height: 95%;
    padding: 1rem;
    margin: 2rem 0;
  }
  .center {
    max-width: 15vw;
    background: transparent;
    z-index: 1000;
    margin: 0 auto;
    .item {
      background: transparent;
      align-self: center;
      align-items: center;
      justify-content: center;
      .pokedex-img {
        margin: 0 auto;
        /* padding: 1rem; */
        /* max-width: 100%; */
        position: relative;
        top: 50%;
      }
      img {
        width: 20rem;
      }
    }
  }
  .left {
    /* white-space: nowrap; */
    max-width: 100%;
    .item {
      /* -webkit-box-shadow: 10px 10px 29px -5px rgba(189, 189, 79, 1);
      -moz-box-shadow: 10px 10px 29px -5px rgba(189, 189, 79, 1);
      box-shadow: 10px 10px 29px -5px rgba(189, 189, 79, 1); */
      /* max-width: 80% !important; */
      overflow: visible;
      white-space: nowrap;
      ul {
        position: relative;
        right: -3rem;
        margin: 0;
        padding: 0;
      }
      h1 {
        font-size: 3rem;
      }
      align-self: flex-start;
      background-image: url(${ThunderImg});
      background-clip: padding-box;
      padding: 1rem;
      background-position: bottom;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }

  .right {
    background: ${Theme.colors.darkYellow};
    /* -webkit-box-shadow: -12px 0px 29px -5px rgba(189, 189, 79, 1);
    -moz-box-shadow: -12px 0px 29px -5px rgba(189, 189, 79, 1);
    box-shadow: -12px 0px 29px -5px rgba(189, 189, 79, 1); */
    .item {
      align-self: flex-end;
    }
  }
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Background />
        <div className="container">
          <Content>
            <div className="side left">
              <div className="item">
                <ul>
                  <li>
                    <h1>Every Pokemon Master Has a Pokedex</h1>
                  </li>
                  <li>
                    <h4>Must Have Tool For All Pokemon Enthuesient</h4>
                  </li>
                </ul>
              </div>
            </div>
            <div className="side center">
              <div className="item">
                <div className="pokedex-img">
                  <img src={PokedexImg} alt="" />
                </div>
              </div>
            </div>
            <div className="side right">
              <div className="item">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Architecto modi soluta quae asperiores omnis eos earum
                perferendis ipsa, porro illum quam possimus, reiciendis nulla
                fugit, labore dicta? Perspiciatis, laboriosam quidem nostrum
                aspernatur adipisci qui reprehenderit unde harum autem, sed
                illum eos, deleniti quae. Corporis minus magni aliquid, sint
                quis tempore voluptatem voluptates a, dolorum obcaecati
                laboriosam repellat laborum deleniti dolores.
              </div>
            </div>
          </Content>
        </div>
      </div>
    );
  }
}

export default App;
