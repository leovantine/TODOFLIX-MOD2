import React, {Component } from 'react'
import styled from 'styled-components'
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
} body{
  background-color: #000;
}
`
const Header = styled.div`
display: flex;
justify-content: space-around;
width: 28vw;
margin: 2vh;
margin-left: 3vw;
`
const Title = styled.h1`
font-family: 'Bebas Neue', cursive;
font-weight: 200;
font-size: 40px;
color: #E71B27;
`
const Home = styled.div`
margin: 2vh;
`
const Paragraph = styled.p`
color: #fff;
font-weight: 300;
&:hover{
  cursor: pointer;
  font-weight: 400;
}
`
const DetailsDiv = styled.div`
margin: 2vh;
`
const Details = styled.details`
color: #fff;
`
const Category = styled.summary`
font-weight: 300;
&:hover{
  cursor: pointer;
  font-weight: 400;
}
`
const All = styled.summary`
font-weight: 300;
&:hover{
  cursor: pointer;
  font-weight: 400;
}
`
const Favorite = styled.summary`
font-weight: 300;
&:hover{
  cursor: pointer;
  font-weight: 400;
}
`
const Watched = styled.summary`
font-weight: 300;
&:hover{
  cursor: pointer;
  font-weight: 400;
}
`
const Add = styled.summary`
font-weight: 300;
&:hover{
  cursor: pointer;
  font-weight: 400;
}
`
const Options = styled.div`
display: flex;
justify-content: flex-end;

`
const Button = styled.button`
position: relative;
margin-left: 55vw;
bottom: 8vh;
border: solid #E71B27;
border-radius: 4px;
width: 8vw;
height: 5vh;
font-size: 12px;
font-weight: 300;
background-color: #E71B27;
color: #fff;
&:hover{
  cursor: pointer;
}
`
export default class App extends Component {
  render(){
    return(
      <div>
        <GlobalStyle/>

        <Header>
        <Title>TODOFLIX</Title>
        <Home>
        <Paragraph>Início</Paragraph>
        </Home>
        <DetailsDiv>
        <Details>
          <Category>Categorias</Category>
          <All>Todos</All>
          <Favorite>Favoritos</Favorite>
          <Watched>Já vistos</Watched>
          <Add>Adicionados</Add>
        </Details>
        </DetailsDiv>
        </Header>
        <Button>Adicionar filme</Button>
        </div>
    )
  }
}
//font-family: 'Bebas Neue', cursive;//