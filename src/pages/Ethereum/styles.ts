import styled from 'styled-components';

export const Container = styled.div`
    section {
        font-family: 'Roboto' sans-serif;
        h1 {
            margin-top: 3%;
            text-align: center;
            background-color: #6D7071;
            width: 80%;
            margin-left: 11%;
            font-size: 20px;
            padding: 2%;
            color: #fff;
            border-radius: 11px;
            @media(max-width: 800px){
                font-size: 10px;
                padding: 5%;
                width: 90%;
                margin-left: 5%;
            }
        }
        h2 {
            margin: 2%;
            text-align: center;
            background-color: #7CAFC4;
            font-size: 19px;
            padding: 2%;
            color: #3C3F40;
            border-radius: 11px;
            @media(max-width: 800px){
                font-size: 10px;
                margin-bottom: 9%;
            }
        }
        p {
            text-align: justify;
            width: 50%;
            margin-left: 25%;
            margin-top: 2%;
            @media(max-width: 800px){
                font-size: 10px;
                margin-left: 3%;
                width: 90%;
            }
        }
    }
`;
export const Img1 = styled.img`
    width: 35%;
    margin-top: 1%;
    margin-left: 35%;
    @media(max-width: 800px){
        width: 65%;
        margin-top: 4%;
        margin-left: 18%;
    }
`;
export const Img2 = styled.img`
    width: 50%;
    margin-top: 5%;
    margin-left: 25%;
`;

export const Text = styled.h1`
    color: #F1F5F7;
    margin: 8%;
    font-size: 47px;
    @media(max-width: 800px){
        font-size: 23px;
    }
`;
export const Img = styled.img`
    width: 23%;
    @media(max-width: 800px){
        width: 18%;
    }
`; 