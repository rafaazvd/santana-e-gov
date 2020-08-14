import React from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Section from '../../components/Section';
import ethereum1 from '../../assets/ethereum1.png';
import smart from '../../assets/smart.png';
import smart1 from '../../assets/smart1.png';
import { Text, Container, Img, Img1, Img2 } from './styles';

const Ethereum: React.FC = () => {
    return (
        <Container>
            <Header>
                <Text>ETHEREUM</Text>
                <Img src={ethereum1} alt="santana e-gov"/>
            </Header>
            <Section>
                <h1>
                    São várias as noticias de fraude em licitações em
                    produtos referentes a o combate  do covid-19 e em
                    alguns casos não são entregues os serviços ou 
                    produtos acertados na licitação ou é retornado 
                    algo diferente. Um smart contract 
                    resolveria esses problemas e não é algo complexo ou teórico,
                    por exemplo o governo da comunidade autônoma de Aragão, na
                    Espanha, abriu um concurso público na blockchain Ethereum 
                    para a aquisição de 35.000 máscaras reutilizáveis. O material
                    será usado pelos membros da administração pública para se
                    proteger do coronavírus.
                </h1>
                <Img1 src={smart1} alt="santana e-gov" />
                <h2>O Que é o Ethereum ?</h2>
                <p>
                    É uma plataforma descentralizada capaz de executar contratos inteligentes
                    e aplicações descentralizadas através da tecnologia blockchain que está 
                    revolucionando o mercado financeiro mundial. Ethereum se valorizou 200% 
                    em 2020 (e superou e muito o Bitcoin esse ano).
                    Os desenvolvedores do Ethereum estão criando uma nova atualização 
                    gigantesca para a plataforma, conhecida como Serenity ou Ethereum 2.0.
                    Esse update será lançado em uma série de fases que chegarão nos próximos 
                    anos, sendo que pelo menos uma delas é esperada para 2020. 
                </p>
                <h2>Licitação Usando Ethereum </h2>
                <p>
                    Os smartcontracts são programas de computador com regras lógicas. 
                    Nesses contratos são alocados recursos em “ether”, o dinheiro da rede 
                    ethereum, e se a parte contratada cumprir com a obrigação, ela recebe o 
                    dinheiro que já estava sob a guarda da rede ethereum
                </p>
                <Img2 src={smart} alt="santana egov"/>
            </Section>
            <br />
            <Footer />
            <br />
        </Container>
    )
}
export default Ethereum;