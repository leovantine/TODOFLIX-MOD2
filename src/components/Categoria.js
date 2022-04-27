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
height: 15vh;
width: 7vw;
text-align: center;
padding: 1vh;
background-color: #000;
position:absolute;
top: 7vh;
left: 25vw;
`
const Ulist = styled.ul`
list-style: none;
color: #fff;
`
const List = styled.li`
color: #fff;
margin: 0.5vh;
font-weight: bolder;
&:hover{
    cursor: pointer;
    color: #E71B27;
}
`
const Linking = styled(Link)`
color: #fff;
text-decoration: none;
&:hover{
    cursor: pointer;
    color: #E71B27;
}
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