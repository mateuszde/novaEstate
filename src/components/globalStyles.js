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

p {
    line-height: 1.5em;
    font-size: 17px;
}

`;

export default GlobalStyle;
