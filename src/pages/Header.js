import React, { Component } from 'react'
import Usericon from "./Imagens/Usericon.png"
import Iconuser from "./Imagens/Iconuser.png"
import {
    Link
} from 'react-router-dom'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`
const Header = styled.div`
display: flex;
justify-content: space-between;
width: 100vw;
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
`
const Homepage = styled.p`
color: #fff;
&:hover{
  cursor: pointer;
  color: #E71B27;
}
`
const Category = styled.h2`
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
width: 6vw;
height: 4vh;
font-size: 12px;
color: #fff;
background-color: #E71B27;
border: none;
border-radius: 4px;
&:hover{
  cursor: pointer;
}
`
const Search = styled.input`
width: 22vw;
height: 4vh;
background-color: #2C2C2C;
border: none;
border-radius: 3px;
color: #fff;
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
export default class Header extends Component {
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
                        <Homepage><Link to="/">Início</Link></Homepage>
                        <Category onClick={this.modalcategory}>Categorias<span>&#9663;</span></Category>
                        {this.state.modalcategory && <Modal />}
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