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
        font-family: 'Barlow Semi Condensed', sans-serif;
        background: linear-gradient(to bottom, ${colors.radial_gradient});
    }

    @media (min-width: 1025px) and (max-width: 1366px) {
        :root {
           font-size: 14px;
        }
    }

    @media (min-width: 801px) and (max-width: 1024px) {
        :root {
            font-size: 12px;
        }
    }

    @media (max-width: 800px) {
        :root {
            font-size: 8px;
        }
    }
`;

export default GlobalStyle;