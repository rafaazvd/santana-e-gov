import styled from 'styled-components';

export const Container = styled.div`
    section {
        h1 {
            text-align: center;
            background-color: #7CAFC4;
            font-size: 17px;
            padding: 2%;
            color: #3C3F40;
            border-radius: 11px;
            margin-top: 4%;
            @media(max-width: 800px){
                font-size: 10px;
            }
        }
        h2 {
            margin-top: 4%;
            text-align: center;
            background-color: #6D7071;
            width: 70%;
            margin-left: 17%;
            font-size: 20px;
            padding: 2%;
            color: #fff;
            border-radius: 11px;
            @media(max-width: 800px){
                font-size: 10px;
            }
        }
        p {
            text-align: justify;
            width: 50%;
            margin-left: 22%;
            margin-top: 2%;
            @media(max-width: 800px){
                font-size: 10px;
                margin-left: 3%;
                width: 90%;
            }
        }
    }
`;

export const Text = styled.h1`
    color: #F1F5F7;
    margin: 8%;
    font-size: 47px;
    @media(max-width: 800px){
        font-size: 17px;
    }
`;
export const Img = styled.img`
    width: 23%;
`; 