import React, {Component} from 'react'
import styled from 'styled-components'
import {
    Link
} from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`
const Container = styled.div`
position: absolute;

`
const Ulist = styled.ul`
list-style: none;
width: 100%;
height: 100%;
`
export default class Dropdown extends Component {
    render(){
        return(
            <Router>
            <GlobalStyle/>
            <Container>
                <Ulist>
                    <li>
                        <Link to="/todos">Todos</Link>
                    </li>
                    <li>
                        <Link to="/favoritos">Favoritos</Link>
                    </li>
                    <li>
                        <Link to="/vistos">Já vistos</Link>
                    </li>
                    <li>
                        <Link to="/adicionados">Adicionados</Link>
                    </li>
                </Ulist>
            </Container>
            </Router>
        )
    }
}