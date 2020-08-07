import React from 'react';

import { Container, ProgressBar, Header, Footer, Ballon } from './styles';

export default function Storage() {
    const storage = 1000;
    const stored = 815;

    return (
        <Container>
            <Ballon>
                <span style={{ fontWeight: 700, fontSize: '35px', marginRight: '8px' }} > {storage - stored} </span>
                <span style={{ color: 'hsl(229, 7%, 55%)', fontWeight: 700 }}> GB left </span>
            </Ballon>
            <Header>
                You’ve used <span> {stored} GB </span> of your storage
            </Header>

            <ProgressBar progress={stored * 100 / storage}>
                <div className='progress'> &nbsp; </div>
            </ProgressBar>

            <Footer>
                <span> 0 GB </span>
                <span> {storage} GB </span>
            </Footer>
        </Container>
    );
}
