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
                <Img src={blockchain1} />
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
export default Blockchain;