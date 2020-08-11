import React from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Section from '../../components/Section';
import blockchain1 from '../../assets/blockchain1.png';
import { Text, Container, Img } from './styles';

const Blockchain: React.FC = () => {
    return (
        <Container>
            <Header>
                <Text>BLOCKCHAIN</Text>
                <Img src={blockchain1} alt="santana e-gov"/>
            </Header>
            <Section>
                <h1>A Tecnologia Blockchain projetada inicialmente para arquitetura do bitcoin,
                    ela agora estar sendo usada em vários outros contextos. Um desses contextos 
                    é o da governança, onde sistemas distribuídos têm grande potencial de mudar
                     o setor da gestão pública.
                    Deve-se notar que os próprios governos podem apresentar obstáculos à adoção 
                    da blockchain. Em alguns casos, as autoridades simplesmente não entendem o valor
                     da tecnologia, levando-os a desconsiderar os muitos benefícios em potencial. Em 
                     casos mais extremos, governos nos quais a corrupção é uma prática generalizada 
                     tendem a resistir à adoção da blockchain para proteger seus interesses pessoais
                      e evitar a corrupção de ser evidenciada.</h1>
                <h2>PRINCIPAIS MOTIVOS PARA OS GOVERNANTES IMPLEMENTAREM BLOCKCHAIN</h2>
                <h1>Maior Descentralização</h1>
                <p>
                Como sistemas distribuídos, todas apresentam um certo 
                grau de descentralização. Isso se deve ao fato de que 
                uma rede blockchain é mantida por vários computadores 
                (nós), que trabalham em sincronia para verificar 
                e validar todos os dados.
                </p>
                <h1>Integridade de Dados</h1>
                <p>
                Os sistemas blockchain podem atingir um alto nível 
                de imutabilidade e sua estrutura pode ser personalizada
                 para garantir que a informação só possa ser acessada e 
                 modificada por entidades autorizadas. Na prática, 
                 diferentes agências governamentais poderiam atuar 
                 como um validador Isso reduziria muito a probabilidade 
                 de adulteração de dados e fraude. Em outros cenários, 
                 organizações não-governamentais, universidades e 
                 cidadãos também poderiam ser incluídos como nós de
                  validação (validating nodes).
                </p>
                <h1>Transparência</h1>
                <p>
                Os bancos de dados blockchain podem ser usados para 
                armazenar e proteger registros do governo de uma maneira
                 que dificulte a manipulação ou ocultação de informações.
                  Sob o modelo atual, a maioria dos dados governamentais 
                  é armazenada em bancos de dados centralizados, que são 
                  controlados diretamente pelas autoridades. A arquitetura 
                  blockchain pode distribuir o processo de verificação e 
                  armazenamento de dados entre várias entidades, resultando 
                  em uma descentralização do poder.
	            Em uma linguagem mais cara, dificulta 
                fraudes e facilita auditorias
                 e o trabalho da policia na investigação
                  de crimes da administração.
                </p>
                <h1>Melhor Eficiência e Custos Operacionais Reduzidos</h1>
                <p>
                Como os governos dependem dos impostos, é importante que
                 eles usem seus orçamentos com sabedoria. Os sistemas
                  blockchain e os contratos inteligentes (smart contracts) 
                  podem ser empregados para automatizar algumas tarefas e
                operações, o que reduziria muito o tempo e o dinheiro 
                gastos em processos burocráticos. Além disso, ao reduzir 
                os custos operacionais, os governos podem investir mais 
                em outras áreas, como educação, segurança e saúde pública.
                Como também trazer uma redução significativa em custos
                    administrativos associados à coleta e distribuição de 
                    impostos e à aplicação da legislação tributária. Por 
                    exemplo, ao armazenar registros e processar devoluções 
                    em blockchains privados, as agências de cobrança de 
                    impostos também podem fornecer segurança contra fraudes
                    ou roubo de identidade.
                </p>
            </Section>
            <br />
            <Footer />
            <br />
        </Container>
    )
}
export default Blockchain;