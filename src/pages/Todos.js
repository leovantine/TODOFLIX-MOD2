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
import Prisionerofazkaban from "../imagens/Prisionerofazkaban.jpg"
import Breakingdown2 from "../imagens/Breakingdown2.jpg"
import Orphan from "../imagens/Orphan.jpg"
import Coraline from "../imagens/Coraline.jpg"
import Remember from "../imagens/Remember.jpg"
import Moonfall from "../imagens/Moonfall.jpg"

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
const Img = styled.img`
width: 300px;
`
export default class App extends Component {
    state = {
        movies: [
            {
                title: "Amor sem medida",
                banner: Amorsemmedida,
                overview: "Ivana ?? uma bela advogada que se apaixona por Ricardo, um divertido cardiologista. Apesar da conex??o entre os dois, Ricardo ?? um homem baixo e o casal deve enfrentar a discrimina????o de outras pessoas e seus pr??prios preconceitos para viver esse amor."
            },
            {
                title: "Um lugar silencioso - Parte II",
                banner: Aquiteplace2,
                overview: "A fam??lia Abbott precisa enfrentar os terrores do mundo exterior enquanto luta pela sobreviv??ncia em sil??ncio. For??ados a se aventurar no desconhecido, eles percebem que as criaturas que ca??am pelo som n??o s??o as ??nicas amea??as no caminho da areia."
            },
            {
                title: "Encanto",
                banner: Encanto,
                overview: "Encanto da Walt Disney Animation Studios conta a hist??ria dos Madrigal, uma fam??lia extraordin??ria que vive escondida nas montanhas da Col??mbia, em uma casa m??gica, em uma cidade vibrante, em um lugar maravilhoso conhecido como um Encanto. A magia deste Encanto aben??oou todos os meninos e meninas da fam??lia com um dom ??nico, desde superfor??a at?? o poder de curar. Todos, exceto Mirabel. Mas, quando ela descobre que a magia que cerca o Encanto est?? em perigo, Mirabel decide que ela, a ??nica Madrigal sem poderes m??gicos, pode ser a ??ltima esperan??a de sua fam??lia excepcional."
            },
            {
                title: "A casa de cera",
                banner: Houseofwax,
                overview: "Um grupo de amigos da faculdade est?? a caminho de um jogo de futebol quando, em uma cidade fantasma, o carro quebra e s??o obrigados a procurar aux??lio no ??nico lugar que est?? aberto: o museu de cera local. Eles ficam impressionados com a perfei????o das esculturas e logo percebem a raz??o de tanto realismo. Aterrorizados, fogem para n??o se transformarem em pe??as de museu."
            },
            {
                title: "Um match surpresa",
                banner: Lovehard,
                overview: "Natalie encontra o match perfeito e decide atravessar o pa??s para fazer uma surpresa e conhec??-lo. As coisas n??o saem como o esperado, mas talvez ela consiga fazer com que essa hist??ria tenha um final feliz."
            },
            {
                title: "Mal??vola",
                banner: Maleficent,
                overview: "Mal??vola, uma jovem de cora????o puro, vive em um pac??fico reino na floresta. Um dia, um ex??rcito invasor amea??a a harmonia da regi??o e ela se transforma na mais feroz protetora do reino. No entanto, uma terr??vel trai????o a transforma em uma mulher amarga e vingativa. Como consequ??ncia, ela amaldi??oa Aurora, sua filha rec??m-nascida. Mas, aos poucos, Mal??vola percebe que a crian??a ?? a chave para a paz no reino e para sua verdadeira felicidade tamb??m."
            },
            {
                title: "Noit??rios de arrepiar",
                banner: Nightbooks,
                overview: "Alex se torna prisioneiro de uma bruxa e deve contar um hist??ria de terror para ela todas as noites se quiser viver. Para escapar, ele se junta a Yasmin, uma outra ref??m da vil??, e bola um plano arriscado."
            },
            {
                title: "Divaldo - O mensageiro da paz",
                banner: Omensageirodapaz,
                overview: "Convivendo com a mediunidade desde os quatro anos, Divaldo era rejeitado pelas outras crian??as e reprimido pelo pai. Ao completar 17 anos, o jovem decide usar seu dom para ajudar as pessoas e se muda para Salvador, com o apoio da m??e. Sob a orienta????o de sua guia espiritual, Joanna de ??ngelis, ele se torna um dos m??diuns mais importantes de todos os tempos."
            },
            {
                title: "A escolha perfeita 3",
                banner: Pitchperfect3,
                overview: "Agora formadas, Beca, Fat Amy, Chloe e as demais Bella Bardens est??o infelizes devido a trabalhos mal remunerados e pouco motivadores. Diante desta situa????o, elas decidem se unir mais uma vez como grupo ?? capela para participar do USO Tour, uma turn?? que as leva para apresenta????es na Europa. L??, elas precisam duelar com grupos musicais que privilegiam a autorialidade das can????es em detrimento de novas vers??es de m??sicas j?? consagradas."
            },
            {
                title: "O projeto Adam",
                banner: Theadamproject,
                overview: "Um viajante do tempo volta ao ano de 2022 por acidente e acaba se encontrando com seu eu mais novo. Juntos, e sendo ca??ados por for??as do futuro, os dois embarcam em uma miss??o para consertar a linha temporal e salvar seus entes queridos."
            },
            {
                title: "A fant??stica f??brica de chocolate",
                banner: Thechocolatefactory,
                overview: "Baseado no conto de Roald Dahl, este c??mico e fant??stico filme segue o jovem Charlie Bucket e seu av?? Joe. Eles se juntam a um pequeno grupo de ganhadores de uma competi????o, os quais v??o para um passeio na m??gica e misteriosa f??brica do exc??ntrico Willy Wonka. Ajudado por seus an??es trabalhadores, Wonka esconde uma surpresa para durante o passeio."
            },
            {
                title: "O diabo veste prada",
                banner: Thedevilwearsprada,
                overview: "Andy, uma mo??a rec??m-formada e com grandes sonhos, vai trabalhar na conceituada revista de moda Runway; sua fun????o ?? ser assistente da diab??lica Miranda Priestly. Andy, que n??o se sente bem no ambiente tenso de trabalho, questiona sua habilidade em continuar como assistente de Miranda."
            },
            {
                title: "Red: Crescer ?? uma fera",
                banner: Turningred,
                overview: "Uma menina de 13 anos come??a a se transformar em um panda vermelho gigante sempre que fica animada."
            },
            {
                title: "As branquelas",
                banner: Whitechicks,
                overview: "Dois irm??os agentes do FBI, Marcus e Kevin Copeland, acidentalmente evitam que bandidos sejam presos em uma apreens??o de drogas. Como castigo, eles s??o for??ados a escoltar um par de socialites nos Hamptons. Por??m, quando as meninas descobrem o plano da ag??ncia, se recusam a ir. Sem op????es, Marcus e Kevin decidem posar como as irm??s, transformando-se de homens afro-americanos em um par de loiras."
            },
            {
                title:"Ainda estou aqui",
                banner: Theinbetween,
                overview: "Uma adolescente perde o amor da sua vida em um tr??gico acidente. Arrasada, a jovem come??a a achar que o rapaz est?? se comunicando com ela do al??m."
            },
            {
                title:"Branca de neve e o ca??ador",
                banner: Snowwhite,
                overview: " Branca de Neve e a ??nica pessoa na terra mais bonita do que a rainha m??, a qual est?? decidida a destru??-la. Por??m o que a malvada tirana nunca imaginou ?? que a jovem que amea??a seu reinado vem treinando a arte da guerra com o ca??ador, que foi enviado para mat??-la. O pr??ncipe h?? muito tempo encantado pela beleza e pelo poder da Branca de Neve."
            },
            {
                title: "O quebra nozes e os quatro reinos",
                banner: Thenutcracker,
                overview: "Clara, uma jovem esperta e independente, perde a ??nica chave m??gica capaz de abrir um presente de valor incalcul??vel dado por seu padrinho. Ela decide ent??o iniciar uma jornada de resgate que a leva pelo Reino dos Doces, o Reino das Neves, o Reino das Flores e o sinistro Quarto Reino."
            },
            {
                title: "Alice atrav??s do espelho",
                banner: Alice,
                overview: "Alice retorna ap??s uma longa viagem pelo mundo, e reencontra a m??e. No casar??o de uma grande festa, percebe a presen??a de um espelho m??gico. A jovem atravessa o objeto e retorna ao Pa??s das Maravilhas, onde descobre que o Chapeleiro Maluco e sua fam??lia correm risco de morte. Para salvar o amigo, Alice deve conversar com o Tempo para voltar ??s v??speras de um evento traum??tico e mudar seus destinos cru??is."
            },
            {
                title: "Corra",
                banner: Getout,
                overview: "Chris ?? um jovem fot??grafo negro que est?? prestes a conhecer os pais de Rose, sua namorada caucasiana. Com o tempo, ele percebe que a fam??lia dela esconde algo muito perturbador."
            },
            {
                title: "A garota da capa vermelha",
                banner: Redridinghood,
                overview: "Valerie ?? uma jovem que vive em um vilarejo aterrorizado por um lobisomem. Ela ?? apaixonada por Peter, embora seus pais insistam que ela case com Henry, filho de uma fam??lia rica do local. Diante da situa????o, Valerie e Peter planejam fugir, mas veem seus planos irem por ??gua abaixo quando a irm?? mais velha de Valerie ?? assassinada pelo lobisomem que ronda a regi??o. Eles recorrem ao padre Solomon, um ca??ador famoso de monstros que adverte que a fera toma forma humana durante o dia."
            },
            {
                title: "Harry Potter e a pedra filosofal",
                banner: Philosophersstone,
                overview: "Harry Potter ?? um garoto ??rf??o que vive infeliz com seus tios, os Dursleys. Ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa escola especializada em formar jovens bruxos. Inicialmente, Harry ?? impedido de ler a carta por seu tio, mas logo recebe a visita de Hagrid, o guarda-ca??a de Hogwarts, que chega para lev??-lo at?? a escola. Harry adentra um mundo m??gico que jamais imaginara, vivendo diversas aventuras com seus novos amigos, Rony Weasley e Hermione Granger."
            },
            {
                title: "Harry Potter e a c??mara secreta",
                banner: Chamberofsecrets,
                overview: "Ap??s as sofr??veis f??rias na casa dos tios, Harry Potter se prepara para voltar a Hogwarts e come??ar seu segundo ano na escola de bruxos. Na v??spera do in??cio das aulas, a estranha criatura Dobby aparece em seu quarto e o avisa de que voltar ?? um erro e que algo muito ruim pode acontecer se Harry insistir em continuar os estudos de bruxaria. O garoto, no entanto, est?? disposto a correr o risco e se livrar do lar problem??tico."
            },
            {
                title:"Harry Potter e o prisioneiro de Azkaban",
                banner: Prisionerofazkaban,
                overview: "?? o in??cio do terceiro ano na escola de bruxaria Hogwarts. Harry, Ron e Hermione t??m muito o que aprender. Mas uma amea??a ronda a escola e ela se chama Sirius Black. Ap??s doze anos encarcerado na pris??o de Azkaban, ele consegue escapar e volta para vingar seu mestre, Lord Voldemort. Para piorar, os Dementores, guardas supostamente enviados para proteger Hogwarts e seguir os passos de Black, parecem ser amea??as ainda mais perigosas."
            },
            {
                title: "A saga crep??sculo: Amanhecer - Parte 2",
                banner: Breakingdown2,
                overview: "Depois do nascimento da filha de Bella e Edward, Renesmee, os Cullen re??nem lobisomens, cl??s de vampiros e outros aliados de todo o mundo para proteg??-la, j?? que uma falsa alega????o faz com que os Volturi queiram mat??-la."
            },
            {
                title: "A ??rf??",
                banner: Orphan,
                overview: "Uma s??rie de eventos alarmantes faz com que uma mulher acredite que algum mal esteja por tr??s do rosto angelical da filha de nove anos, recentemente adotada."
            },
            {
                title: "Coraline e o mundo secreto",
                banner: Coraline,
                overview: "Enquanto explora sua nova casa ?? noite, a pequena Coraline descobre uma porta secreta que cont??m um mundo parecido com o dela, por??m melhor em muitas maneiras. Todos t??m bot??es no lugar dos olhos, os pais s??o carinhosos e os sonhos de Coraline viram realidade por l??. Ela se encanta com essa descoberta, mas logo percebe que segredos estranhos est??o em a????o: uma outra m??e e o resto de sua fam??lia tentam mant??-la eternamente nesse mundo paralelo."
            },
            {
                title: "Lembran??as",
                banner: Remember,
                overview: "Tyler tem uma rela????o complicada com seu pai desde uma trag??dia em sua fam??lia. Rebelde e problem??tico, ele acha que ningu??m entende seu sofrimento, at?? que conhece a simp??tica e carinhosa Ally. Mas justamente quando o jovem redescobre a felicidade, segredos come??am a surgir e amea??am o romance."
            },
            {
                title: "Moonfall - Amea??a Lunar",
                banner: Moonfall,
                overview: "Em Moonfall, por motivos desconhecidos, a Lua sai de sua ??rbita e passa a se deslocar em dire????o ?? Terra, podendo causar uma colis??o em breve. A ex-astrounauta da NASA, Jo Fowler (Halle Berry), acha que pode resolver essa situa????o e impedir que o impacto aconte??a, mas apenas um de seus colegas (Patrick Wilson) acredita nela. Em situa????o de emerg??ncia, um grupo de cientistas n??o especializados no assunto aceita a miss??o de ir at?? a Lua e impedir a colis??o antes que a vida humana seja extinta. Mas ao chegarem l??, eles percebem que a Lua n??o ?? exatamente a pedra gigante orbitando a Terra que acharam que era. Com o mundo ?? beira da aniquila????o, Jo Fowler precisar?? unir for??as a um homem de seu passado e um te??rico da conspira????o para uma miss??o imposs??vel no espa??o, e salvar a humanidade."
            }
        ]
    }
    render() {
        return (
            <Container>
                <Title>Todos</Title>
                {this.state.movies.map(item => (<>
                    <Img src={item.banner} alt="Filmes" />
                </>))}
            </Container>
        )
    }
}