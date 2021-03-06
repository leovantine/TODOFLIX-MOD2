import React, { Component } from 'react'
import Header from "./pages/Header.js"
import Route from "./components/Routes.js"
import {BrowserRouter as Router, Routes} from 'react-router-dom'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
} 
body{
  background-color: #000;
}
`
export default class App extends Component {
  render() {
    return (
      <Router>
        <GlobalStyle />
        <Header/>
        <Route/>
      </Router>
    )
  }
}
//font-family: 'Bebas Neue', cursive;//