import React from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Section from '../../components/Section';
import logo1 from '../../assets/assinaturadigital1.png';
import { Container, Img, Title } from './styles';

const Assinatura: React.FC = () => {
    return (
        <Container>
            <Header >
                <Title>ASSINATURA DIGITAL</Title>
                <Img src={logo1} />
            </Header>
            <Section>
                <p>
                    <h1>Visando o aperfeiçoamento de processos internos da Administração Pública quanto a maior disponibilidade de serviços públicos e a melhoria da qualidade de interface do Estado com o cidadão.</h1>
                    <br/> <br/>          
	A assinatura digital tem como principal vantagem desburocratizar operações em diversas esferas como simplifica o 
    envio de documentos e a comunicação digital entre o cidadão e o poder 
    público, com a possibilidade de utilização de novos meios de assinatura 
    eletrônica, com o mesmo valor legal das tradicionais assinaturas em papel. 
    
                       
                </p>
                <br/> <br/> <br/> <br/> <br/>
            </Section>
            <br />
            <Footer />           
           <br />
        </Container>
    )
}
export default Assinatura;