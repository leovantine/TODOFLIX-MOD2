import React, { Component } from 'react'
import styled from 'styled-components'
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

import Theinbetween from "../imagens/Theinbetween.jpg"
import Snowwhite from "../imagens/Snowwhite.jpg"
import Thenutcracker from "../imagens/Thenutcracker.jpg"
import Alice from "../imagens/Alice.jpg"
import Getout from "../imagens/Getout.jpg"
import Redridinghood from "../imagens/Redridinghood.jpg"
import Philosophersstone from "../imagens/Philosophersstone.jpg"
import Chamberofsecrets from "../imagens/Chamberofsecrets.jpg"
import Prisionerofazkaban from "../imagens/Prisionerofazkaban"
import Breakingdown2 from "../imagens/"
import A from "../imagens/"
import A from "../imagens/"
import A from "../imagens/"
import A from "../imagens/"

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`
const Container = styled.div`
width: 100%;
height: 100%;
`
const Title = styled.h1`
color: #fff;
margin: 3vh;
margin-left: 6vw;
`
const MoviesBox = styled.div`
width: 100%;
height: 100%;
`
const Firstmovies = styled.div`
display: flex;
justify-content: space-evenly;
width: 75vw; 
margin-left: 5vw;
`
const CardOne = styled.img`
width: 280px;
border-radius: 6px;
&:hover{
    cursor: pointer;
    transform:scale(1.1);
  }
`
const InfoOne = styled.div`
display: flex;
justify-content: space-evenly;
width: 100vw;
height: 100%;
`
const Stmovie = styled.h4`
color: #fff;
margin-left: 4vw;
`
const Ndmovie = styled.h4`
color: #fff;
margin-right: 29vw;
`
const Rdmovie = styled.h4`
color: #fff;
`
const Thmovie = styled.h4`
color: #fff;
`
const SecondMovies = styled.div`
display: flex;
justify-content: space-evenly;
width: 75vw; 
margin: 10vh;
margin-left: 5vw;
`
const Cardtwo = styled.img`
width: 280px;
border-radius: 6px;
&:hover{
    cursor: pointer;
    transform:scale(1.1);
  }
`
const Thirdmovies = styled.div`
display: flex;
justify-content: space-evenly;
width: 75vw; 
margin: 10vh;
margin-left: 5vw;
`
const Cardthree = styled.img`
width: 280px;
border-radius: 6px;
&:hover{
    cursor: pointer;
    transform:scale(1.1);
  }
`
export default class App extends Component {
    state = {
        movies: [
            {
                title: "Amor sem medida",
                banner: Amorsemmedida,
                overview: "Ivana é uma bela advogada que se apaixona por Ricardo, um divertido cardiologista. Apesar da conexão entre os dois, Ricardo é um homem baixo e o casal deve enfrentar a discriminação de outras pessoas e seus próprios preconceitos para viver esse amor."
            },
            {
                title: "Um lugar silencioso - Parte II",
                banner: Aquiteplace2,
                overview: "A família Abbott precisa enfrentar os terrores do mundo exterior enquanto luta pela sobrevivência em silêncio. Forçados a se aventurar no desconhecido, eles percebem que as criaturas que caçam pelo som não são as únicas ameaças no caminho da areia."
            },
            {
                title: "Encanto",
                banner: Encanto,
                overview: "Encanto da Walt Disney Animation Studios conta a história dos Madrigal, uma família extraordinária que vive escondida nas montanhas da Colômbia, em uma casa mágica, em uma cidade vibrante, em um lugar maravilhoso conhecido como um Encanto. A magia deste Encanto abençoou todos os meninos e meninas da família com um dom único, desde superforça até o poder de curar. Todos, exceto Mirabel. Mas, quando ela descobre que a magia que cerca o Encanto está em perigo, Mirabel decide que ela, a única Madrigal sem poderes mágicos, pode ser a última esperança de sua família excepcional."
            },
            {
                title: "A casa de cera",
                banner: Houseofwax,
                overview: "Um grupo de amigos da faculdade está a caminho de um jogo de futebol quando, em uma cidade fantasma, o carro quebra e são obrigados a procurar auxílio no único lugar que está aberto: o museu de cera local. Eles ficam impressionados com a perfeição das esculturas e logo percebem a razão de tanto realismo. Aterrorizados, fogem para não se transformarem em peças de museu."
            },
            {
                title: "Um match surpresa",
                banner: Lovehard,
                overview: "Natalie encontra o match perfeito e decide atravessar o país para fazer uma surpresa e conhecê-lo. As coisas não saem como o esperado, mas talvez ela consiga fazer com que essa história tenha um final feliz."
            },
            {
                title: "Malévola",
                banner: Maleficent,
                overview: "Malévola, uma jovem de coração puro, vive em um pacífico reino na floresta. Um dia, um exército invasor ameaça a harmonia da região e ela se transforma na mais feroz protetora do reino. No entanto, uma terrível traição a transforma em uma mulher amarga e vingativa. Como consequência, ela amaldiçoa Aurora, sua filha recém-nascida. Mas, aos poucos, Malévola percebe que a criança é a chave para a paz no reino e para sua verdadeira felicidade também."
            },
            {
                title: "Noitários de arrepiar",
                banner: Nightbooks,
                overview: "Alex se torna prisioneiro de uma bruxa e deve contar um história de terror para ela todas as noites se quiser viver. Para escapar, ele se junta a Yasmin, uma outra refém da vilã, e bola um plano arriscado."
            },
            {
                title: "Divaldo - O mensageiro da paz",
                banner: Omensageirodapaz,
                overview: "Convivendo com a mediunidade desde os quatro anos, Divaldo era rejeitado pelas outras crianças e reprimido pelo pai. Ao completar 17 anos, o jovem decide usar seu dom para ajudar as pessoas e se muda para Salvador, com o apoio da mãe. Sob a orientação de sua guia espiritual, Joanna de Ângelis, ele se torna um dos médiuns mais importantes de todos os tempos."
            },
            {
                title: "A escolha perfeita 3",
                banner: Pitchperfect3,
                overview: "Agora formadas, Beca, Fat Amy, Chloe e as demais Bella Bardens estão infelizes devido a trabalhos mal remunerados e pouco motivadores. Diante desta situação, elas decidem se unir mais uma vez como grupo à capela para participar do USO Tour, uma turnê que as leva para apresentações na Europa. Lá, elas precisam duelar com grupos musicais que privilegiam a autorialidade das canções em detrimento de novas versões de músicas já consagradas."
            },
            {
                title: "O projeto Adam",
                banner: Theadamproject,
                overview: "Um viajante do tempo volta ao ano de 2022 por acidente e acaba se encontrando com seu eu mais novo. Juntos, e sendo caçados por forças do futuro, os dois embarcam em uma missão para consertar a linha temporal e salvar seus entes queridos."
            },
            {
                title: "A fantástica fábrica de chocolate",
                banner: Thechocolatefactory,
                overview: "Baseado no conto de Roald Dahl, este cômico e fantástico filme segue o jovem Charlie Bucket e seu avô Joe. Eles se juntam a um pequeno grupo de ganhadores de uma competição, os quais vão para um passeio na mágica e misteriosa fábrica do excêntrico Willy Wonka. Ajudado por seus anões trabalhadores, Wonka esconde uma surpresa para durante o passeio."
            },
            {
                title: "O diabo veste prada",
                banner: Thedevilwearsprada,
                overview: "Andy, uma moça recém-formada e com grandes sonhos, vai trabalhar na conceituada revista de moda Runway; sua função é ser assistente da diabólica Miranda Priestly. Andy, que não se sente bem no ambiente tenso de trabalho, questiona sua habilidade em continuar como assistente de Miranda."
            },
            {
                title: "Red: Crescer é uma fera",
                banner: Turningred,
                overview: "Uma menina de 13 anos começa a se transformar em um panda vermelho gigante sempre que fica animada."
            },
            {
                title: "As branquelas",
                banner: Whitechicks,
                overview: "Dois irmãos agentes do FBI, Marcus e Kevin Copeland, acidentalmente evitam que bandidos sejam presos em uma apreensão de drogas. Como castigo, eles são forçados a escoltar um par de socialites nos Hamptons. Porém, quando as meninas descobrem o plano da agência, se recusam a ir. Sem opções, Marcus e Kevin decidem posar como as irmãs, transformando-se de homens afro-americanos em um par de loiras."
            }
        ]
    }
    render() {
        return (
            <Container>
                <Title>Todos</Title>
                <MoviesBox>
                    <Firstmovies>
                        <CardOne src={Amorsemmedida} alt="Filme: Amor sem medida" />
                        <CardOne src={Aquiteplace2} alt="Filme: A quite place - Parte II" />
                        <CardOne src={Encanto} alt="Filme: Encanto" />
                        <CardOne src={Houseofwax} alt="Filme: A casa de cera" />
                    </Firstmovies>

                    {/* <InfoOne>
                        <Stmovie>Amor sem medida</Stmovie>
                        <Ndmovie>Um lugar silencioso - Parte II</Ndmovie>
                        <Rdmovie>Encanto</Rdmovie>
                        <Thmovie>A casa de cera</Thmovie>
                    </InfoOne> */}

                    <SecondMovies>
                        <Cardtwo src={Lovehard} alt="Filme: Um match surpresa" />
                        <Cardtwo src={Maleficent} alt="Filme: Malévola" />
                        <Cardtwo src={Nightbooks} alt="Filme: Noitários de arrepiar" />
                        <Cardtwo src={Omensageirodapaz} alt="Filme: Divaldo - O mensageiro da paz" />
                    </SecondMovies>

                    <Thirdmovies>
                        <Cardthree src={Pitchperfect3} alt="Filme: A escolha perfeita 3" />
                        <Cardthree src={Theadamproject} alt="Filme: O projeto adam" />
                        <Cardthree src={Thechocolatefactory} alt="Filme: A fantástica fábrica de chocolate" />
                        <Cardthree src={Thedevilwearsprada} alt="Filme: O diabo veste prada" />
                    </Thirdmovies>

                </MoviesBox>
            </Container>
        )
    }
}