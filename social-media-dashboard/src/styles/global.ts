import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 14px;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html,
    body,
    #root {
        height: 100%;
    }

    body {
        font-family: 'Inter', sans-serif;
        background: ${props => props.theme.colors.bodyBackground}
    }
`;
