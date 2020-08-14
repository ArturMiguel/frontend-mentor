import React, { useState } from 'react';

import closeIcon from '../../assets/icons/icon-close.svg';
import rulesImg from '../../assets/images/image-rules.svg';

import { Container, Button, Modal } from './styles';

function Rules() {
    const [isRulesVisible, setIsRulesVisible] = useState(false);

    function handleRulesVisibility() {
        setIsRulesVisible(!isRulesVisible);
    }

    return (
        <Container>
            <Button onClick={handleRulesVisibility}>RULES</Button>
            {isRulesVisible &&
                <Modal>
                    <div>
                        <h1>RULES</h1>
                        <img onClick={handleRulesVisibility} src={closeIcon} alt='Close' />
                    </div>
                    <img src={rulesImg} alt='Rules' />
                </Modal>
            }
        </Container>
    );
}

export default Rules;