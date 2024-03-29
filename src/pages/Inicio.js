import React, { Component } from 'react'
import Carousel, { NextButton } from 'nuka-carousel'
import styled from 'styled-components'
import RedNotice from "../imagens/RedNotice.jpg"
import { createGlobalStyle } from 'styled-components'

import Amorsemmedida from "../imagens/Amorsemmedida.jpg"
import Aquiteplace2 from "../imagens/Aquiteplace2.jpg"
import Encanto from "../imagens/Encanto.jpg"
import Houseofwax from "../imagens/Houseofwax.jpg"
import Lovehard from "../imagens/Lovehard.jpg"
import Maleficent from "../imagens/Maleficent.jpg"
import Nightbooks from "../imagens/Nightbooks.jpg"
import Omensageirodapaz from "../imagens/Omensageirodapaz.jpg"
import Pitchperfect3 from "../imagens/Pitchperfect3.jpg"
import Theadamproject from "../imagens/Theadamproject.png"
import Thechocolatefactory from "../imagens/Thechocolatefactory.jpg"
import Thedevilwearsprada from "../imagens/Thedevilwearsprada.jpg"
import Turningred from "../imagens/Turningred.jpg"
import Whitechicks from "../imagens/Whitechicks.jpg"

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #fff;
}
`
const Container = styled.div`
width: 100%;
height: 30vh;
background-color:;
`
const Divimg = styled.div`
display: flex;
flex-direction: column;
margin-left: 6.5vw;
padding-top: 8vh;
height: 39vh;
`
const Thebest = styled.h3`
color: #fff;
margin: ;
`
const Boxcarousel = styled.div`
background-color:;
margin: 13vh;
display: flex;
flex-direction: column;
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
&:hover{
    cursor: pointer;
    transform:scale(1.1);
}
`
const Viewed = styled.p`
color: #fff;
font-size: 15px;
font-weight: 500;
`
const Ndtitle = styled.h2`
color: #fff;
font-size: 30px;
`
const Overview = styled.p`
color: #fff;
font-size: 14px;
width: 30vw;
`
const Ndheart = styled.svg`
margin-bottom: 18vh;
position: relative;
right: 1.5vw;
&:hover{
    cursor: pointer;
    transform:scale(1.1);
}
`
const Img = styled.img`
width: 300px;
height: 170px;
border-radius: 6px;
&:hover{
    cursor: pointer;
    
}
`
const Rating = styled.div`
display: flex;
justify-content: flex-end;
margin-right: 2vw;
align-items: center;
width: 19vw;
`
/* const Boxcarousel = styled.div`
width: 100%;
height: 100vh;
` */
const Title = styled.h4`
color:#fff;
`
const Sinopse = styled.p`
color: #fff;
font-size: 12px;
overflow: hidden;
width: 20vw;
height: 38vh;
`
const Svg = styled.svg`
width:19px;
height:20px;
`
const P = styled.p`
display: flex;
color: #fff;
`
export default class App extends Component {
    state = {
        movies: [
            {
                title: "Amor sem medida",
                banner: Amorsemmedida,
                overview: "Ivana é uma bela advogada que se apaixona por Ricardo, um divertido cardiologista. Apesar da conexão entre os dois, Ricardo é um homem baixo e o casal deve enfrentar a discriminação de outras pessoas e seus próprios preconceitos para viver esse amor.",
                nota: 2.7
            },
            {
                title: "Um lugar silencioso - Parte II",
                banner: Aquiteplace2,
                overview: "A família Abbott precisa enfrentar os terrores do mundo exterior enquanto luta pela sobrevivência em silêncio. Forçados a se aventurar no desconhecido, eles percebem que as criaturas que caçam pelo som não são as únicas ameaças no caminho da areia.",
                nota: 4.1
            },
            {
                title: "Encanto",
                banner: Encanto,
                overview: "Encanto da Walt Disney Animation Studios conta a história dos Madrigal, uma família extraordinária que vive escondida nas montanhas da Colômbia, em uma casa mágica, em uma cidade vibrante, em um lugar maravilhoso conhecido como um Encanto. A magia deste Encanto abençoou todos os meninos e meninas da família com um dom único, desde superforça até o poder de curar. Todos, exceto Mirabel. Mas, quando ela descobre que a magia que cerca o Encanto está em perigo, Mirabel decide que ela, a única Madrigal sem poderes mágicos, pode ser a última esperança de sua família excepcional.",
                nota: 4.1
            },
            {
                title: "A casa de cera",
                banner: Houseofwax,
                overview: "Um grupo de amigos da faculdade está a caminho de um jogo de futebol quando, em uma cidade fantasma, o carro quebra e são obrigados a procurar auxílio no único lugar que está aberto: o museu de cera local. Eles ficam impressionados com a perfeição das esculturas e logo percebem a razão de tanto realismo. Aterrorizados, fogem para não se transformarem em peças de museu.",
                nota: 3.8
            },
            {
                title: "Um match surpresa",
                banner: Lovehard,
                overview: "Natalie encontra o match perfeito e decide atravessar o país para fazer uma surpresa e conhecê-lo. As coisas não saem como o esperado, mas talvez ela consiga fazer com que essa história tenha um final feliz.",
                nota: 3.7
            },
            {
                title: "Malévola",
                banner: Maleficent,
                overview: "Malévola, uma jovem de coração puro, vive em um pacífico reino na floresta. Um dia, um exército invasor ameaça a harmonia da região e ela se transforma na mais feroz protetora do reino. No entanto, uma terrível traição a transforma em uma mulher amarga e vingativa. Como consequência, ela amaldiçoa Aurora, sua filha recém-nascida. Mas, aos poucos, Malévola percebe que a criança é a chave para a paz no reino e para sua verdadeira felicidade também.",
                nota: 4.4
            },
            {
                title: "Noitários de arrepiar",
                banner: Nightbooks,
                overview: "Alex se torna prisioneiro de uma bruxa e deve contar um história de terror para ela todas as noites se quiser viver. Para escapar, ele se junta a Yasmin, uma outra refém da vilã, e bola um plano arriscado.",
                nota: 2.9
            },
            {
                title: "Divaldo - O mensageiro da paz",
                banner: Omensageirodapaz,
                overview: "Convivendo com a mediunidade desde os quatro anos, Divaldo era rejeitado pelas outras crianças e reprimido pelo pai. Ao completar 17 anos, o jovem decide usar seu dom para ajudar as pessoas e se muda para Salvador, com o apoio da mãe. Sob a orientação de sua guia espiritual, Joanna de Ângelis, ele se torna um dos médiuns mais importantes de todos os tempos.",
                nota: 4.4
            },
            {
                title: "A escolha perfeita 3",
                banner: Pitchperfect3,
                overview: "Agora formadas, Beca, Fat Amy, Chloe e as demais Bella Bardens estão infelizes devido a trabalhos mal remunerados e pouco motivadores. Diante desta situação, elas decidem se unir mais uma vez como grupo à capela para participar do USO Tour, uma turnê que as leva para apresentações na Europa. Lá, elas precisam duelar com grupos musicais que privilegiam a autorialidade das canções em detrimento de novas versões de músicas já consagradas.",
                nota: 3.8
            },
            {
                title: "O projeto Adam",
                banner: Theadamproject,
                overview: "Um viajante do tempo volta ao ano de 2022 por acidente e acaba se encontrando com seu eu mais novo. Juntos, e sendo caçados por forças do futuro, os dois embarcam em uma missão para consertar a linha temporal e salvar seus entes queridos.",
                nota: 3.9
            },
            {
                title: "A fantástica fábrica de chocolate",
                banner: Thechocolatefactory,
                overview: "Baseado no conto de Roald Dahl, este cômico e fantástico filme segue o jovem Charlie Bucket e seu avô Joe. Eles se juntam a um pequeno grupo de ganhadores de uma competição, os quais vão para um passeio na mágica e misteriosa fábrica do excêntrico Willy Wonka. Ajudado por seus anões trabalhadores, Wonka esconde uma surpresa para durante o passeio.",
                nota: 4.2
            },
            {
                title: "O diabo veste prada",
                banner: Thedevilwearsprada,
                overview: "Andy, uma moça recém-formada e com grandes sonhos, vai trabalhar na conceituada revista de moda Runway; sua função é ser assistente da diabólica Miranda Priestly. Andy, que não se sente bem no ambiente tenso de trabalho, questiona sua habilidade em continuar como assistente de Miranda.",
                nota: 4.4
            },
            {
                title: "Red: Crescer é uma fera",
                banner: Turningred,
                overview: "Uma menina de 13 anos começa a se transformar em um panda vermelho gigante sempre que fica animada.",
                nota: 4.1
            },
            {
                title: "As branquelas",
                banner: Whitechicks,
                overview: "Dois irmãos agentes do FBI, Marcus e Kevin Copeland, acidentalmente evitam que bandidos sejam presos em uma apreensão de drogas. Como castigo, eles são forçados a escoltar um par de socialites nos Hamptons. Porém, quando as meninas descobrem o plano da agência, se recusam a ir. Sem opções, Marcus e Kevin decidem posar como as irmãs, transformando-se de homens afro-americanos em um par de loiras.",
                nota: 4.4
            }
        ],
        filter: []
    }
    async componentDidMount() {
        this.movies()
    }
    movies = async () => {
        const moviesfilter = this.setState({
            filter: this.state.filmes
        })
    }
    filtermovies = (event) => {
        const { filmes } = this.state

        if (event.target.value === "") {
            this.setState({
                filter: this.state.filmes
            })
            return
        }
        const Convert = filmes.filter((item) => {
            if (item.title.toLowerCase().includes(event.target.value.toLowerCase())) {
                return true
            }
        })
        this.setState({
            filter: Convert
        })
    }
    render() {
        return (
            <Container>
                <Divimg>
                    <MainImg src={RedNotice} alt="Red Notice" />
                    <Info>
                        <Heart id="Component_11_1" data-name="Component 11 – 1" xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22">
                            <ellipse id="Ellipse_8" data-name="Ellipse 8" cx="10.5" cy="11" rx="10.5" ry="11" fill="#717171" />
                            <path id="Path_407" data-name="Path 407" d="M865.16-1403.7l-.893-.813c-3.172-2.877-5.266-4.774-5.266-7.1a3.355,3.355,0,0,1,3.388-3.388,3.689,3.689,0,0,1,2.772,1.287,3.689,3.689,0,0,1,2.772-1.287,3.355,3.355,0,0,1,3.388,3.388c0,2.328-2.094,4.225-5.267,7.108Z" transform="translate(-854.5 1421)" fill="#b1b1b1" />
                        </Heart>
                        <Viewed>Visto recentemente</Viewed>
                        <Ndtitle>Alerta Vermelho</Ndtitle>
                        <Overview>Um alerta vermelho da Interpol é emitido e o agente do FBI John Hartley assume o caso. Durante sua busca, ele se vê diante de um assalto ousado e é forçado a se aliar ao maior ladrão de arte da história, Nolan Booth, para capturar a ladra de arte mais procurada do mundo atualmente, Sarah Black.</Overview>
                    </Info>
                </Divimg>
                <Boxcarousel>
                    <Thebest>Destaques</Thebest>
                    <Carousel slidesToShow={4} cellAlign={'left'} disableEdgeSwiping={true} wrapAround={true} autoplay={true} >
                        {this.state.movies.map(item => (<>
                            <Img src={item.banner} alt="Filmes" />
                            <Ndheart id="Component_11_1" data-name="Component 11 – 1" xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22">
                                <ellipse id="Ellipse_8" data-name="Ellipse 8" cx="10.5" cy="11" rx="10.5" ry="11" fill="#717171" />
                                <path id="Path_407" data-name="Path 407" d="M865.16-1403.7l-.893-.813c-3.172-2.877-5.266-4.774-5.266-7.1a3.355,3.355,0,0,1,3.388-3.388,3.689,3.689,0,0,1,2.772,1.287,3.689,3.689,0,0,1,2.772-1.287,3.355,3.355,0,0,1,3.388,3.388c0,2.328-2.094,4.225-5.267,7.108Z" transform="translate(-854.5 1421)" fill="#b1b1b1" />
                            </Ndheart>
                            <Rating>
                                <P>{item.nota}/5</P>
                                <Svg style={{ padding: "0 0vw 0.5vh 0" }} id="IconThumbsUpFilled" data-name="Icon / Thumbs Up / Filled" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                                    <rect id="Box" width="17" height="17" fill="none" />
                                    <path id="Path1994" data-name="Path 1994" d="M97-8.286h2.805v-8.229H97Zm15.429-7.543a1.391,1.391,0,0,0-1.4-1.371H106.6l.666-3.134.021-.219a1.021,1.021,0,0,0-.309-.727l-.743-.72-4.615,4.519a1.326,1.326,0,0,0-.414.967v6.857a1.391,1.391,0,0,0,1.4,1.371h6.312a1.394,1.394,0,0,0,1.29-.837l2.118-4.834a1.328,1.328,0,0,0,.1-.5v-1.31l-.007-.007Z" transform="translate(-96.143 23.714)" fill="white" style={item.nota >= 4 ? { fill: '#01F202' } : item.nota >= 3 ? { fill: '#F23900' } : item.nota < 3 ? { fill: '#E60000' } : { fill: '#E60000' }} />
                                </Svg>
                            </Rating>
                            <Title onChange={this.filtermovies}>{item.title}</Title>
                            <Sinopse>{item.overview}</Sinopse>
                        </>))}
                    </Carousel>
                </Boxcarousel>
            </Container>
        )
    }
}