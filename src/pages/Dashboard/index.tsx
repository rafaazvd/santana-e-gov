import React from 'react';
import { Link } from 'react-router-dom';

import Footer from '../../components/Footer';
import logo from '../../assets/bitcoin.png';
import logoEthereum from '../../assets/ethereum-logo-3.png';
import bitcoin1 from '../../assets/bitcoin1.png';
import blockchain from '../../assets/blockchain.png';
import assinatura from '../../assets/assinatura.png';
import logosantana from '../../assets/novologosantana.png';
import instagram from '../../assets/instagram.png';


import { 
    Container,
    Title,
    Img,
    LogoLink,
    Techs,
    LogoHome,
    Insta,
    Network,
 } from './styles';


const Dashboard: React.FC = () => {
 
    return (
        <Container>
            <header>
                <Link to="/">
                <LogoHome src={logosantana} alt="santana e-gov"/>
                <p>
                PROJETO QUE VISA COMBATER A CORRUPÇÃO, TRAZER ECONOMIA PARA A GESTÃO PÚBLICA E DESBUROCRATIZAR AS OPERAÇÕES COM O USO DAS TECNOLOGIAS ABAIXO
                </p>
                </Link>
                <br /> <br />
            </header>
             <section>
                <Img>
                    <img src={logo} alt="santana e-gov" />
                </Img>
            <Techs>
            <Link to="/assinatura">
            <LogoLink src={assinatura} /><h4>Assinatura eletrônica, com o mesmo valor legal das tradicionais assinaturas em papel</h4>
            </Link>
            <Link to="/blockchain">
            <LogoLink src={blockchain} /><h4> A tecnologia Blockchain deixa o governo transparente. Facilita processos burocráticos e legais do dia a dia</h4>
            </Link>
            <Link to="/bitcoin">
            <LogoLink src={bitcoin1} /><h4>Bitcoin traz transparência e combate à corrupção além de blindar contra a desvalorização da moeda</h4>
            </Link>
            <Link to="/ethereum">
            <LogoLink src={logoEthereum} /><h4>Contratos inteligentes que excluí os bancos, cartórios, intermediários reduzindo muito os gastos públicos</h4>
            </Link>
            </Techs>
            <Title>
                    PENSAR DIFERENTE,
                    PARA FAZER DIFERENTE. É PRECISO INOVAR, INFORMATIZAR, AUTOMATIZAR PARA IR PARA O PRÓXIMO NÍVEL,
                    GERAR EMPREGOS, DESBUROCRATIZAR, FACILITAR O LIVRE MERCADO E ECONOMIZAR.
             </Title>
                
            
            <br /> <br /> <br /> <br /> <br /> <br /> <br />
                
                <a href="https://www.instagram.com/santana_e_gov">
                    <Insta>
                    <Network src={instagram} />
                    <div>@santana_e-gov</div>
                </Insta></a>              
                <br /> <br />
            </section>
            <br />
            <Footer />           
           <br />
        </Container>
    );
};

export default Dashboard;
