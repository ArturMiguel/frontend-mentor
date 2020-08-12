import React from 'react';

import './styles.scss';

export interface Card {
    iconPath: string;
    title: string;
    description: string;
    style?: object
}

const CardItem: React.FC<Card> = ({ iconPath, title, description, style }) => {
    return (
        <div style={style} className='card-container'>
            <div className='card-item'>
                <div>
                    <img src={iconPath} alt={title} />
                </div>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default CardItem;