import React from 'react';

import { Container } from './styles';

const Header: React.FC = ({ children }) => {
    return (
        <Container>
            <section>
                {children}
                <br/> <br/> <br/> <br/> <br/>
            </section>        
        </Container>
    )
}
export default Header;