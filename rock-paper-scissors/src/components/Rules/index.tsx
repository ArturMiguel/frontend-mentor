import React, { useState } from 'react';

import closeIcon from '../../assets/icons/icon-close.svg';
import rulesImg from '../../assets/images/image-rules.svg';

import { Button, RulesContainer } from './styles';

function Rules() {
    const [isRulesVisible, setIsRulesVisible] = useState(false);

    function handleRulesVisibility() {
        setIsRulesVisible(!isRulesVisible);
    }

    return (
        <>
            <Button onClick={handleRulesVisibility}>RULES</Button>
            {isRulesVisible &&
                <RulesContainer>
                    <div>
                        <h1>RULES</h1>
                        <img onClick={handleRulesVisibility} src={closeIcon} alt='Close' />
                    </div>
                    <img src={rulesImg} alt='Rules' />
                </RulesContainer>
            }
        </>
    );
}

export default Rules;