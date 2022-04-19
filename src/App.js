import React, {Component } from 'react'
import Usericon from "./Imagens/Usericon.png"
import Iconuser from "./Imagens/Iconuser.png"
import RedNotice from "./Imagens/RedNotice.jpg"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
import styled from 'styled-components'
import {createGlobalStyle} from 'styled-components'

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
font-weight: 300;
&:hover{
  cursor: pointer;
  font-weight: 400;
}
`
const Details = styled.details`
color: #fff;
`
const List = styled.summary`
font-weight: 300;
&:hover{
  cursor: pointer;
  font-weight: 400;
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
const Divimg = styled.div`
margin: 10vh;
`
const MainImg = styled.img`
width: 30%;
border-radius: 10px;
box-shadow: inset 0 0 1em gold, 0 0 1em red;
&:hover{
  cursor: pointer;
  transform:scale(1.1);
}
`
export default class App extends Component {
  render(){
    return(
      <Router>
        <GlobalStyle/>

        <Header>
          <Home>
        <Title>TODOFLIX</Title>
        <Homepage>Início</Homepage>
        <Details>
          <List>Categorias</List>
          <List>Todos</List>
          <List>Favoritos</List>
          <List>Já vistos</List>
          <List>Adicionados</List>
        </Details>
        </Home>
        <Optionsdiv>
          <Button>Adicionar filme</Button>
          <Search type="text" placeholder="Pesquisar"/>
          <Img src={Usericon} alt="User icon"/>
          <NdImg src={Iconuser} alt="User button"/>
          </Optionsdiv>
        </Header>

        <Divimg>
          <MainImg src={RedNotice} alt="Red Notice"/>
        </Divimg>
        </Router>
    )
  }
}
//font-family: 'Bebas Neue', cursive;//