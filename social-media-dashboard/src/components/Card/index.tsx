import React from 'react';

import { Container, Header, Middle, Footer } from './styles';

interface Props {
    social: string;
    icon: string;
    status: string;
    username: string;
    totalFollowers: string;
    followersToday: string;
}

const Card: React.FC<Props> = ({ social, icon, status, username, totalFollowers, followersToday }) => {
    return (
        <Container social={social}>
            <Header>
                <img src={icon} alt='Facebook icon' />
                <span>{username}</span>
            </Header>
            <Middle>
                <h1>{totalFollowers}</h1>
                <p>FOLLOWERS</p>
            </Middle>
            <Footer status={status}>
                <span> {followersToday} Today </span>
            </Footer>
        </Container>
    );
}

export default Card;
