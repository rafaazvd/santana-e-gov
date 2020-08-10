import { createGlobalStyle } from 'styled-components';
import bck1 from '../assets/bck1.png';


export default createGlobalStyle`
 * {
     margin: 0;
     padding: 0;
     outline: 0;
     box-sizing: border-box;
 }

 body {
     background-image: url(${bck1});
    background-color: #f0f0f5; 
    -webkit-font-smoothing: antialiased;
 }
 


 body, input, button {
  font: 16px Roboto, sans-serif;
}

 #root {
     max-width: 84%;
     margin: 0 auto;
     padding: 5%, 3%;
     @media(max-width: 800px) {
        max-width: 94%;
  }

 }

 button {
     cursor: pointer;
 }

`;
