import React, {Component} from 'react'
import styled from 'styled-components'
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
    margin:;
    padding:;
    box-sizing: border-box; 
}
`

const H1 = styled.h1`
color: #fff;
`
export default class App extends Component {
    render(){
        return(
            <>
            <GlobalStyle/>
            <H1>AQUI É A PÁGINA DE VISTOS</H1>
            </>
        )
    }
}