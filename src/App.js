import React, { Component } from 'react'
import Header from "./pages/Header.js"
import Rota from "./components/Routes.js"
import {BrowserRouter as Router} from 'react-router-dom'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
} 
body{
  width: 100%;
  background-color: #000;
}
`
export default class App extends Component {
  render() {
    return (
      <Router>
        <GlobalStyle />
        <Header/>
        <Rota/>
      </Router>
    )
  }
}
//font-family: 'Bebas Neue', cursive;//