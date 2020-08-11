import React, { useState } from 'react';

import './styles.scss';

export interface Link {
    link: string;
    short: string;
}

const LinkItem: React.FC<Link> = ({ link, short }) => {
    const [isCopied, setIsCopied] = useState(false);

    function clipToClipboard() {
        const el = document.createElement('input');
        el.value = short;

        document.body.appendChild(el);
        el.select();

        document.execCommand('copy');
        document.body.removeChild(el);

        setIsCopied(true);
    }

    return (
        <div className='link-item'>
            <span className='link'>{link}</span>
            <span className='shortened'>{short}</span>
            {isCopied 
                ? <button onClick={clipToClipboard} style={{ background: 'var(--color-primary-dark-violet)' }}>Copied!</button>
                : <button onClick={clipToClipboard}>Copy</button>
            }
        </div>
    );
}

export default LinkItem;