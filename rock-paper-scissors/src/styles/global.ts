import { createGlobalStyle } from 'styled-components';

import { colors } from './variables';

const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 16px;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: 0;
    }

    html,
    body,
    #root {
        min-height: 100%;
    }

    body {
        background: linear-gradient(to bottom, ${colors.radial_gradient});
    }

    body,
    button {
        font-family: 'Barlow Semi Condensed', sans-serif;
    }

    @media (max-width: 1366px) {
        :root {
            font-size: 14px;
        }
    }

    @media (max-width: 1024px) {
        :root {
            font-size: 12px;
        }
    }
`;

export default GlobalStyle;