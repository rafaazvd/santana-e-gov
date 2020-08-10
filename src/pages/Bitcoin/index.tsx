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
                <Img src={bitcoin2} />
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
export default Bitcoin;