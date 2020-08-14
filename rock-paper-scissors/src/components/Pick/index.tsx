import React from 'react';

import rockIcon from '../../assets/icons/icon-rock.svg';
import paperIcon from '../../assets/icons/icon-paper.svg';
import scissorsIcon from '../../assets/icons/icon-scissors.svg';

import { colors } from '../../styles/variables';
import { Button } from './style';

export interface PickProps {
    name: string;
    size: string;
    selectable: boolean;
    onClick?: () => void;
    customStyle?: object
}

function Pick({ name, size, selectable, onClick, customStyle }: PickProps) {
    const picks = [
        { name: 'rock', icon: rockIcon, color: colors.rock_gradient },
        { name: 'paper', icon: paperIcon, color: colors.paper_gradient },
        { name: 'scissors', icon: scissorsIcon, color: colors.scissors_gradient }
    ];

    const picked = picks.filter(p => p.name === name)[0] || '' ;

    return (
        <Button
            color={picked.color}
            icon={picked.icon}
            size={size}
            selectable={selectable}
            onClick={onClick}
            style={customStyle}
        />
    );
}

export default Pick;