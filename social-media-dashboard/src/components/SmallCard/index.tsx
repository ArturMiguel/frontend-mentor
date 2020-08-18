import React from 'react';

import { Container, Header, Footer } from './styles';

interface Props {
    title: string;
    icon: string;
    data: string;
    percent: string;
    status: string;
}

const SmallCard: React.FC<Props> = ({ title, icon, data, percent, status }) => {
    return (
        <Container>
           <Header>
                <span>{title}</span>
                <img src={icon} alt='Social media icon - overview' />
           </Header>
           <Footer status={status}>
                <span>{data}</span>
                <span>{percent}</span>
           </Footer>
        </Container>
    );
}

export default SmallCard;
