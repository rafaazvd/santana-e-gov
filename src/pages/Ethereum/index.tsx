import React from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Section from '../../components/Section';
import ethereum1 from '../../assets/ethereum1.png';
import { Text, Container, Img } from './styles';

const Ethereum: React.FC = () => {
    return (
        <Container>
            <Header>
                <Text>ETHEREUM</Text>
                <Img src={ethereum1} />
            </Header>
            <Section>
                <h1>Title</h1>
                <p>conteudo</p>
            </Section>
            <br />
            <Footer />
            <br />
        </Container>
    )
}
export default Ethereum;