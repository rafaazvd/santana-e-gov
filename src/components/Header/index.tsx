import React from 'react';

import logoStn from '../../assets/novologosantana.png';
import { Img, Container } from './styles';

const Header: React.FC = ({ children }) => {
    
    
    return (
        <Container>
            <header>
            <Img src={logoStn} />
            
            {children}
            </header>
        
        </Container>
    )
}
export default Header;