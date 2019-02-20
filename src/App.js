import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CoinPrices from './components/CoinPrices'
import NavBar from './components/NavBar/NavBar'
// import SingleCoin from './components/SingleCoin'
import styled from 'styled-components'

const Div = styled.div `
 display: flex;
 justify-content: center ;
 width: 100% ;
 flex-direction: column ;
`

const CoinDiv = styled.div `
border: 1px solid black ;
`
class App extends Component {

  render() {
    return (
      <Div className="App">
      <NavBar />
      <CoinDiv>
      <CoinPrices />
      </CoinDiv>
      </Div>
    );
  }
}

export default App;
