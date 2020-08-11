import styled from 'styled-components';


export const Container = styled.div`
    section {
        background-color: #D4E3EA;

        p {
            text-align: justify;
            padding: 7%;
            h1 {
                text-align: center;
                margin-bottom: 3%;
                margin-top: 1%;
            }
            h3 {
                text-align: justify;
                color: #425157;
                @media(max-width: 800px){
                    font-size: 11px;
                }
            }
        }
    }
`;

export const Content = styled.div`
    display: flex;
    section {
    background-color: #9999;
    border: solid 2px;
    h1 {
        color: #ffff; 
        @media(max-width: 800px){
            font-size: 13px;
        }
    }
    p {
        font-size: 21px;
        @media(max-width: 800px){
                    font-size: 11px;
                }
    }
    }
`;
export const Content2 = styled.div`
    h1 {
        text-align: center;
        margin-top: 7%;
    }
    h4 {
        margin: 2%;
        text-align: center;
        padding: 12px;
        background-color: #1CACE6;
        border-radius: 13px;
    }
    p {
        text-align: justify;
    }
`;

export const Img = styled.img`
    width: 23%;
`; 

export const Title = styled.h1`
    color: #F1F5F7;
    @media(max-width: 800px){
        font-size: 16px;
    }
`;
export const Section1 = styled.section`
    
`;
export const Section2 = styled.section`
    background-color: #9999;

`;
