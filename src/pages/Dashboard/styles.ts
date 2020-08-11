import styled from 'styled-components';

export const Container = styled.div`
     header {
         background-color: #585F5E;
         border-radius: 7px;
         width: 100%;
         height: 5%;
         a {
             text-decoration: none;
             display: row;
             align-items: center;
             justify-content: center;
         }
     }
     p {
         margin-top: 0;
         text-align: center;
         color: #fff;
         font-family: 'Roboto' sans-serif;
         font-size: 77%;
         @media(max-width: 800px) {
        font-size: 47%;
  }
     }
     section {
    background-color: #787D7C;
    width: 100%;
    border-radius: 7px;
    align-items: center;
    justify-content: center;
    h4 {
        opacity: 0;
    }
    a {
        text-decoration: none;
    }
     }
`;

export const Techs = styled.div`
    display: flex;
    margin-bottom: 19%;
    margin-left: 12%;
    a {
        h4 {
            opacity: 0;
            color: #fff;
            background-color: #09CAAF;
            padding: 5px;
            text-align: center;
            border-radius: 17px;
        }
        :hover {
            h4 {
                opacity: 1;
            }
        }
    }
    @media(max-width: 800px) {
    flex-direction: column;
    margin-left: 40%;
    position: relative;
  }
`;

export const LogoLink = styled.img`
    width: 42%;
    margin-right: 4%;
    :hover {
        top:+2px;
        width:220px;
        margin-bottom: 10px;
        }

`;

export const Network = styled.img`
    width: 27px;
    margin-bottom: 0;
    margin-left: 7%;
    margin-top: 2%;
`;

export const Insta = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    div {
        margin-top: 2%;
    }

`;

export const LogoHome = styled.img`
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 37%;
    width: 22%;
    height: 18%;
    @media(max-width: 800px) {
        width: 42%;
        margin-left: 30%;
        height: 38%;
  }
`;

export const Title = styled.h1`
    font-size: 77%;
    border-radius: 17px;
    color: #fff;
    font-weight: bolder;
    text-align: center;
    margin-top: 3px;
    font-family: 'Roboto' sans-serif;
    width: 70%;
    margin-left: 18%;
    @media(max-width: 800px) {
        font-size: 47%;
  }
    
`;

export const Img = styled.div`
    
    margin-top: 1%;
    right: 80%;
    opacity: 0.3;
    img {
        width: 20%;
    }
`;




/*
export const Repositories = styled.div`
    margin-top: 80px;
    max-width: 700px;

    a {
        background: #fff;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: block;
        text-decoration: none;

        display: flex;
        align-items: center;
        transition: transform 0.2s;
        & + a {
            margin-top: 16px;
        }
        &:hover {
            transform: translateX(10px);
        }

        img {
            width: 64px;
            height: 64px;
            border-radius: 32px;
        }

        div {
            margin-left: 16px;
            flex: 1;
            strong {
                font-size: 20px;
                color: #3d3d4d;
            }
            p {
                font-size: 18px;
                color: #a8a8b3;
                margin-top: 4px;
            }
        }
        svg {
            margin-left: auto;
            color: #cbcbd6;
        }
    }
`;

export const Form = styled.form<FormProps>`
    margin-top: 15px;
    max-width: 1000px;

    display: block;
    input {
        flex: 1;
        height: 50px;
        width: 60%;
        margin-left: 25%;
        margin-right: 50%;
        padding: 0 24px;
        border-radius: 12px;
        color: #3a3a3a;
        border: 2px solid #fff;
        border-right: 0;
        margin-right: 12px;
        margin-top: 10px
            ${(props) =>
                props.hasError &&
                css`
                    border-color: #c53030;
                `};

        &::placeholder {
            color: #a8a8b3;
        }
    }
    button {
        width: 110px;
        margin-top: 22px;
        align-items: center;
        justify-content: center;
        height: 40px;
        margin-left: 50%;
        background: #04d361;
        border-radius: 12px;
        border: 0;
        color: #fff;
        font-weight: bold;
        transition: background-color 0.2s;

        &:hover {
            background: ${shade(0.2, '#04d361')};
        }
    }
`;

*/