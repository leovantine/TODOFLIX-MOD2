import React, { Component } from 'react'
import styled from 'styled-components'

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
import Prisionerofazkaban from "../imagens/Prisionerofazkaban.jpg"
import Breakingdown2 from "../imagens/Breakingdown2.jpg"
import Orphan from "../imagens/Orphan.jpg"
import Coraline from "../imagens/Coraline.jpg"
import Remember from "../imagens/Remember.jpg"
import Moonfall from "../imagens/Moonfall.jpg"

const Container = styled.div`
width: 100%;
height: 90vh;
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
`
const Title = styled.h1`
color: #fff;
margin: 3vh;
margin-left: 6vw;
`
const Img = styled.img`
width: 60%;
`
const Moviesbox = styled.div`
border: solid red;
width: 30vw; 
height: 50vh;
`
const InfoBox = styled.div`

`
const H4 = styled.h4`
color: #fff;
`
const P = styled.p`
color: #fff; 
width: 30vw;
font-size: 12px;
width: 20vw;
height: 25vh;
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
            },
            {
                title: "Ainda estou aqui",
                banner: Theinbetween,
                overview: "Uma adolescente perde o amor da sua vida em um trágico acidente. Arrasada, a jovem começa a achar que o rapaz está se comunicando com ela do além."
            },
            {
                title: "Branca de neve e o caçador",
                banner: Snowwhite,
                overview: " Branca de Neve e a única pessoa na terra mais bonita do que a rainha má, a qual está decidida a destruí-la. Porém o que a malvada tirana nunca imaginou é que a jovem que ameaça seu reinado vem treinando a arte da guerra com o caçador, que foi enviado para matá-la. O príncipe há muito tempo encantado pela beleza e pelo poder da Branca de Neve."
            },
            {
                title: "O quebra nozes e os quatro reinos",
                banner: Thenutcracker,
                overview: "Clara, uma jovem esperta e independente, perde a única chave mágica capaz de abrir um presente de valor incalculável dado por seu padrinho. Ela decide então iniciar uma jornada de resgate que a leva pelo Reino dos Doces, o Reino das Neves, o Reino das Flores e o sinistro Quarto Reino."
            },
            {
                title: "Alice através do espelho",
                banner: Alice,
                overview: "Alice retorna após uma longa viagem pelo mundo, e reencontra a mãe. No casarão de uma grande festa, percebe a presença de um espelho mágico. A jovem atravessa o objeto e retorna ao País das Maravilhas, onde descobre que o Chapeleiro Maluco e sua família correm risco de morte. Para salvar o amigo, Alice deve conversar com o Tempo para voltar às vésperas de um evento traumático e mudar seus destinos cruéis."
            },
            {
                title: "Corra",
                banner: Getout,
                overview: "Chris é um jovem fotógrafo negro que está prestes a conhecer os pais de Rose, sua namorada caucasiana. Com o tempo, ele percebe que a família dela esconde algo muito perturbador."
            },
            {
                title: "A garota da capa vermelha",
                banner: Redridinghood,
                overview: "Valerie é uma jovem que vive em um vilarejo aterrorizado por um lobisomem. Ela é apaixonada por Peter, embora seus pais insistam que ela case com Henry, filho de uma família rica do local. Diante da situação, Valerie e Peter planejam fugir, mas veem seus planos irem por água abaixo quando a irmã mais velha de Valerie é assassinada pelo lobisomem que ronda a região. Eles recorrem ao padre Solomon, um caçador famoso de monstros que adverte que a fera toma forma humana durante o dia."
            },
            {
                title: "Harry Potter e a pedra filosofal",
                banner: Philosophersstone,
                overview: "Harry Potter é um garoto órfão que vive infeliz com seus tios, os Dursleys. Ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa escola especializada em formar jovens bruxos. Inicialmente, Harry é impedido de ler a carta por seu tio, mas logo recebe a visita de Hagrid, o guarda-caça de Hogwarts, que chega para levá-lo até a escola. Harry adentra um mundo mágico que jamais imaginara, vivendo diversas aventuras com seus novos amigos, Rony Weasley e Hermione Granger."
            },
            {
                title: "Harry Potter e a câmara secreta",
                banner: Chamberofsecrets,
                overview: "Após as sofríveis férias na casa dos tios, Harry Potter se prepara para voltar a Hogwarts e começar seu segundo ano na escola de bruxos. Na véspera do início das aulas, a estranha criatura Dobby aparece em seu quarto e o avisa de que voltar é um erro e que algo muito ruim pode acontecer se Harry insistir em continuar os estudos de bruxaria. O garoto, no entanto, está disposto a correr o risco e se livrar do lar problemático."
            },
            {
                title: "Harry Potter e o prisioneiro de Azkaban",
                banner: Prisionerofazkaban,
                overview: "É o início do terceiro ano na escola de bruxaria Hogwarts. Harry, Ron e Hermione têm muito o que aprender. Mas uma ameaça ronda a escola e ela se chama Sirius Black. Após doze anos encarcerado na prisão de Azkaban, ele consegue escapar e volta para vingar seu mestre, Lord Voldemort. Para piorar, os Dementores, guardas supostamente enviados para proteger Hogwarts e seguir os passos de Black, parecem ser ameaças ainda mais perigosas."
            },
            {
                title: "A saga crepúsculo: Amanhecer - Parte 2",
                banner: Breakingdown2,
                overview: "Depois do nascimento da filha de Bella e Edward, Renesmee, os Cullen reúnem lobisomens, clãs de vampiros e outros aliados de todo o mundo para protegê-la, já que uma falsa alegação faz com que os Volturi queiram matá-la."
            },
            {
                title: "A órfã",
                banner: Orphan,
                overview: "Uma série de eventos alarmantes faz com que uma mulher acredite que algum mal esteja por trás do rosto angelical da filha de nove anos, recentemente adotada."
            },
            {
                title: "Coraline e o mundo secreto",
                banner: Coraline,
                overview: "Enquanto explora sua nova casa à noite, a pequena Coraline descobre uma porta secreta que contém um mundo parecido com o dela, porém melhor em muitas maneiras. Todos têm botões no lugar dos olhos, os pais são carinhosos e os sonhos de Coraline viram realidade por lá. Ela se encanta com essa descoberta, mas logo percebe que segredos estranhos estão em ação: uma outra mãe e o resto de sua família tentam mantê-la eternamente nesse mundo paralelo."
            },
            {
                title: "Lembranças",
                banner: Remember,
                overview: "Tyler tem uma relação complicada com seu pai desde uma tragédia em sua família. Rebelde e problemático, ele acha que ninguém entende seu sofrimento, até que conhece a simpática e carinhosa Ally. Mas justamente quando o jovem redescobre a felicidade, segredos começam a surgir e ameaçam o romance."
            },
            {
                title: "Moonfall - Ameaça Lunar",
                banner: Moonfall,
                overview: "Em Moonfall, por motivos desconhecidos, a Lua sai de sua órbita e passa a se deslocar em direção à Terra, podendo causar uma colisão em breve. A ex-astrounauta da NASA, Jo Fowler (Halle Berry), acha que pode resolver essa situação e impedir que o impacto aconteça, mas apenas um de seus colegas (Patrick Wilson) acredita nela. Em situação de emergência, um grupo de cientistas não especializados no assunto aceita a missão de ir até a Lua e impedir a colisão antes que a vida humana seja extinta. Mas ao chegarem lá, eles percebem que a Lua não é exatamente a pedra gigante orbitando a Terra que acharam que era. Com o mundo à beira da aniquilação, Jo Fowler precisará unir forças a um homem de seu passado e um teórico da conspiração para uma missão impossível no espaço, e salvar a humanidade."
            }
        ]
    }
    render() {
        return (
            <Container>
                <Title>Todos</Title>

                {this.state.movies.map(item => (<>
                    <Moviesbox>
                        <Img src={item.banner} alt="Filmes" />
                        <InfoBox>
                            <H4>{item.title}</H4>
                            <P>{item.overview}</P>
                        </InfoBox>
                    </Moviesbox>
                </>))}
            </Container>
        )
    }
}