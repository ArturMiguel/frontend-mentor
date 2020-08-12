import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

import './styles.scss';

function DropMenu() {
    const [isVisible, setIsVisible] = useState(false);

    function toggleVisible() {
        setIsVisible(!isVisible);
    }

    return (
        <div className='dropdown'>
            <FaBars onClick={toggleVisible} className='menu-icon' />
            {isVisible && (
                <div className='dropdown-content'>
                    <a href='/'>Features</a>
                    <a href='/'>Pricing</a>
                    <a href='/'>Resources</a>
                    <hr />
                    <button className='login'>Login</button>
                    <button className='sign-up'>Sign Up</button>
                </div>
            )}
        </div>
    );
}

export default DropMenu;