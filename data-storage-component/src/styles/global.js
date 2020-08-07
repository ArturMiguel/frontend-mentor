import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    html, body, #root {
        width: 100%;
        height: 100%;
    }
    
    body {
        font: 14px 'Raleway', sans-serif;;
        background: hsl(229, 57%, 11%) url('/images/bg-desktop.png') no-repeat bottom;
        background-size: 100% 50%;
    }

    @media(max-width: 950px) {
        body {
            background: hsl(229, 57%, 11%) url('/images/bg-mobile.png') no-repeat;
            background-size: 100% 100%;
        }
    }
`