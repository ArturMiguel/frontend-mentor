import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif !important;
    }

    html, body, #root {
        width: 100%;
        height: 100%;
        
    }

    body {
        background: url('/images/bg-bottom.svg') no-repeat bottom left fixed, 
                    url('/images/bg-top.svg') no-repeat top right fixed,
                    hsl(240, 78%, 98%);
        
        @media(max-width: 1030px) {
            background: url('/images/bg-top.svg') no-repeat top right fixed,
                        hsl(240, 78%, 98%);
        }
    }
`;
