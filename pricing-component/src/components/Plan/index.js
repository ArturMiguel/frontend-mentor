import React from 'react';

import { Container, Title, Price, List, Button } from './styles.js'

export default function Plan({ plan, position }) {
    return (
        <Container position={position}>
            <Title>
                {plan.title}
            </Title>
            <Price>
                <span className='simbol'> $ </span>
                <span className='price'> {plan.price} </span>
            </Price>
            <List>
                {plan.benefits.map((benefit, index) => <li key={index}> {benefit} </li> )}
            </List>
            <Button> LEARN MORE </Button>
        </Container>
    );
}