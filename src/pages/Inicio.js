import React, {Component} from 'react'
import styled from 'styled-components'
import RedNotice from "../Imagens/RedNotice.jpg"
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`
const Container = styled.div`

`
const Divimg = styled.div`
display: flex;
flex-direction: column;
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
const Info = styled.div`
display: flex;
flex-direction: column;
margin-left: 30vw;
position: relative;
bottom: 30vh;
`
const Heart = styled.svg`
`
const Viewed = styled.p`
color: #fff;
font-weight: 500;
`
const Ndtitle = styled.h2`
color: #fff;
font-size: 35px;
`
const Overview = styled.p`
color: #fff;
width: 30vw;
`
const Thebest = styled.h2`
color: #fff;
`
export default class App extends Component {
    render(){
        return(
            <Container>
            <Divimg>
          <MainImg src={RedNotice} alt="Red Notice"/>
          <Info>
            <Heart id="Component_11_1" data-name="Component 11 – 1" xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22">
            <ellipse id="Ellipse_8" data-name="Ellipse 8" cx="10.5" cy="11" rx="10.5" ry="11" fill="#717171"/>
            <path id="Path_407" data-name="Path 407" d="M865.16-1403.7l-.893-.813c-3.172-2.877-5.266-4.774-5.266-7.1a3.355,3.355,0,0,1,3.388-3.388,3.689,3.689,0,0,1,2.772,1.287,3.689,3.689,0,0,1,2.772-1.287,3.355,3.355,0,0,1,3.388,3.388c0,2.328-2.094,4.225-5.267,7.108Z" transform="translate(-854.5 1421)" fill="#b1b1b1"/>
            </Heart>
            <Viewed>Visto recentemente</Viewed>
            <Ndtitle>Alerta Vermelho</Ndtitle>
            <Overview>Um alerta vermelho da Interpol é emitido e o agente do FBI John Hartley assume o caso. Durante sua busca, ele se vê diante de um assalto ousado e é forçado a se aliar ao maior ladrão de arte da história, Nolan Booth, para capturar a ladra de arte mais procurada do mundo atualmente, Sarah Black.</Overview>
            </Info>
        </Divimg>
        <Thebest>Destaques</Thebest>
            </Container>
        )
    }
}