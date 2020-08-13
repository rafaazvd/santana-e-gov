import React from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Section from '../../components/Section';
import bitcoin2 from '../../assets/bitcoin2.png';
import { Text, Container, Img } from './styles';

const Bitcoin: React.FC = () => {
    return (
        <Container>
            <Header>
                <Text>BITCOIN</Text>
                <Img src={bitcoin2} alt="e-gov"/>
            </Header>
            <Section>
                <h1>VANTAGENS DE SE USAR BITCOIN OU OUTRA MOEDA DIGITAL</h1>
                <h2>Transparência</h2>
                <p>Todas as informações de transações são criptografadas
                 é um livro contábil público e imutável. </p>

                <h2>Um Dinheiro Internacional </h2>
                <p>Uma moeda universal, de fácil transferência e 
                    sem taxas de câmbio que pode ser usada em 
                    transações internacionais com facilidade.</p>

                <h2>Protege Contra a Inflação</h2>
                <p>O Programador que criou o Bitcoin definiu nos 
                protocolos um limite de 21 milhões de unidades o que
                 torna o sistema Bitcoin deflacionário por natureza, 
                 já que atingido esse limite o próprio software vai
                  impedir a geração de novas emissões.
                Segundo o site <a href='https://www.infomoney.com.br/colunista/terraco-economico/uma-sociedade-sem-inflacao-com-bitcoin-seria-possivel' >InfoMoney</a> O Bank of England elaborou um estudo que teve grande 
                 repercussão: modelou uma economia em que a moeda digital 
                 seria equivalente a 30% do PIB, os resultados indicaram
                  um aumento de 3% no PIB anual, explicados pela queda
                   substancial dos custos de transações, nas taxas de
                    juros e ganhos de eficiência.</p>

                <h2>Um Dinheiro Protegido do Estado</h2>
                <p>Por ser uma uma moeda digital, o governo
                     ou instituições financeiras não podem 
                     regular, congelar ou controlar o seu 
                     dinheiro, ou seja, você é o seu próprio 
                     banco e tem total controle sobre ele.</p>
            </Section>
            <br />
            <Footer />
            <br />
        </Container>
    )
}
export default Bitcoin;