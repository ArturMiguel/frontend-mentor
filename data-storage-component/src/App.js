import React from 'react';

import { GlobalStyle } from './styles/global';
import { Container } from './styles/app';

import Fylo from './components/Fylo';
import Storage from './components/Storage';

function App() {
    return (
        <>
            <GlobalStyle />
            <Container>
                <div className='components'>
                    <Fylo />
                    <Storage />
                </div>
            </Container>
        </>
    );
}

export default App;
