import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*, *::after, *::before {
    padding: 0;
    margin:0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    width: 100%;
    min-height: 100vh;
    font-family: 'Montserrat', sans-serif;
}

`;

export default GlobalStyle;
