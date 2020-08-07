import React, { useState, useEffect } from 'react';

import data from '../../services/data';
import Plan from '../Plan';
import { Container, Title, Toggle, PlanList } from './styles';

export default function Pricing() {
    const [contract, setContract] = useState(data.annually);
    const [checked, setChecked] = useState(true);

    function handleToggle() {
        setChecked(!checked);
    }

    useEffect(() => {
        checked ? setContract(data.annually) : setContract(data.monthly);
    }, [checked]);

    return (
        <Container>
            <Title> Our Pricing </Title>
            <Toggle checked={checked}>
                <span> Annually </span>
                <div onClick={handleToggle} />
                <span> Monthly </span>
            </Toggle>
            <PlanList>
                <Plan plan={contract.a} position='left' />
                <Plan plan={contract.b} position='center' />
                <Plan plan={contract.c} position='right' />
            </PlanList>
        </Container>
    );
}
