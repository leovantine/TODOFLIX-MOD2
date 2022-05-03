import React, { Component } from 'react'
import Usericon from "../imagens/Usericon.png"
import Iconuser from "../imagens/Iconuser.png"
import Lupa from "../imagens/Lupa.png"
import {
    Link
} from 'react-router-dom'
import Dropdown from "../components/Categoria.js"
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`
const Container = styled.div`
width: 100%;
`
const Header = styled.div`
display: flex;
justify-content: space-between;
/* width: 100%; */
posiiton: fixed;
`
const Home = styled.div`
display: flex;
justify-content: space-evenly;
width: 35vw;
height: 2vw;
align-items: center;
margin: 3vh;
`
const Title = styled.h1`
font-family: 'Bebas Neue', cursive;
font-weight: 200;
font-size: 40px;
color: #E71B27;
text-shadow: 0 0 1em red;
&:hover{
    cursor: pointer;
}
`
const Homepage = styled.p`
color: #fff;
font-size: 18px;
font-weight: bolder;
`
const Linking = styled(Link)`
text-decoration: none;
color: #fff;
&:hover{
    cursor: pointer;
    color: #E71B27;
}
`
const Category = styled.h2`
font-size: 18px;
color: #fff;
&:hover{
  cursor: pointer;
  color: #E71B27;
}
`
const Optionsdiv = styled.div`
display: flex;
justify-content: space-evenly;
width: 40%; 
margin: 3vh;
`
const Button = styled.button`
width: 7vw;
height: 4vh;
font-size: 13px;
color: #fff;
background-color: #E71B27;
box-shadow: 0 0 1em red;
border: none;
border-radius: 4px;
&:hover{
  cursor: pointer;
}
`
const Search = styled.input`
width: 22vw;
height: 4vh;
text-align: center;
background-color: #2C2C2C;
border: none;
border-radius: 3px;
color: #fff;
background-image: url(${Lupa});
background-size: 2.8vh;
background-repeat: no-repeat;
background-position: 1%;
::placeholder{
    text-align: center;
    width: 8vw;
    color: #fff;
}
&:hover{
    cursor: text;
    color: #fff;
}
`
const Img = styled.img`
width: 2vw;
height: 4vh;
`
const NdImg = styled.img`
width: 2vw;
height: 5vh;
margin-right: 2vw;
`
export default class App extends Component {
    state = {
        modalcategory: false
    }

    openmenu = () => {
        this.setState({ modalcategory: !this.state.modalcategory })
    }
    render() {
        return (
            <Container>
                <GlobalStyle />
                <Header>
                    <Home>
                        <Title>TODOFLIX</Title>
                        <Homepage><Linking to="/">Início</Linking></Homepage>
                        <Category onClick={this.openmenu}>Categorias<span>&#9663;</span></Category>
                        {this.state.modalcategory && <Dropdown />}
                    </Home>

                    <Optionsdiv>
                        <Button>Adicionar filme</Button>
                        <Search type="text" placeholder="Pesquisar" />
                        <Img src={Usericon} alt="User icon" />
                        <NdImg src={Iconuser} alt="User button" />
                    </Optionsdiv>
                </Header>
            </Container>
        )
    }
}