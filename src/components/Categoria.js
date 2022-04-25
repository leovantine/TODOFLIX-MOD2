import React, { Component } from 'react'
import styled from 'styled-components'
import { 
    Link
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
background-color: #fff;
position:absolute;
top:6.5vh;
left:18vw;
    
`
const Ulist = styled.ul`
list-style: none;
color: #fff;
`
const List = styled.li`
color: #fff;
`
const Linking = styled(Link)`
color: #fff;
`
export default class App extends Component {
    render() {
        return (
                <Container>
                    <GlobalStyle/>
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
        )
    }
}