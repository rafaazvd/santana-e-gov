import React from 'react';

import { Container } from './styles';

const Footer: React.FC = () => {
    return (
        <Container>
            <footer>
               <p>
               <small>Santana-EGov versão 0.1.0</small>
               <br />
               <small>
                   Rafael Azevedo
                   2020 
                    © Todos os direitos reservados
               </small>
               </p>
            </footer>
        </Container>
    )
}
export default Footer;