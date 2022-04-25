import React, { Component } from 'react'
import styled from 'styled-components'
import { 
    Link, Router
} from "react-router-dom"
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
const List = styled.li`

`
const Linking = styled(Link)`

`
export default class App extends Component {
    render() {
        return (
            <Router>
            <GlobalStyle/>
                <Container>
                    <Ulist>
                        <List>
                            <Linking to="/todos">Todos</Linking>
                        </List>
                        <List>
                            <Linking to="/favoritos">Favoritos</Linking>
                        </List>
                        <List>
                            <Linking to="/vistos">Já vistos</Linking>
                        </List>
                        <List>
                            <Linking to="/adicionados">Adicionados</Linking>
                        </List>
                    </Ulist>
                </Container>
                </Router>
        )
    }
}