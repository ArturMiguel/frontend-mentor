import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import usePersistedState from './utils/usePersistedState';

import Home from './pages/Home';

import light from './styles/theme/light';
import dark from './styles/theme/dark';
import { GlobalStyle } from './styles/global';

function App() {
    const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

    function toggleTheme() {
        setTheme(theme.themeName === 'light' ? dark : light);
    }

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Home toggleTheme={toggleTheme} />
        </ThemeProvider>
    );
}

export default App;
