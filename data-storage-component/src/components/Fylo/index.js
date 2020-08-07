import React from 'react';

import { Container, Icons } from './styles';

export default function Fylo() {
    return (
        <Container>
            <img src='/images/logo.svg' style={{ marginBottom: '30px' }} alt='' />
            <Icons>
                <div>
                    <img src='/images/icon-document.svg' alt='' />
                </div>
                <div>
                    <img src='/images/icon-folder.svg' alt='' />
                </div>
                <div>
                    <img src='/images/icon-upload.svg' alt='' />
                </div>
            </Icons>
        </Container>
    );
}
