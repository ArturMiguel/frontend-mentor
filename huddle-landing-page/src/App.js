import React from 'react';

import './styles/app.scss';

function App() {
    return (
        <div className='app-container'>
            <img src='/images/logo.svg' alt='logo' className='header' />
            <img src='/images/illustration-mockups.svg' alt='mockup' className='mockup' />
            <div className='content'>
                <h1 > Build The Community Your Fans Will Love </h1>
                <p>
                    Huddle re-imagines the way we build communities. You have a voice, but so does your audience. 
                    Create connections with your users as you engage in genuine discussion. 
                </p>
                <button> Register </button>
            </div>
            <div className='footer'>
                <button>
                    <i className='fab fa-facebook-f' />
                </button>
                <button>
                    <i className='fab fa-twitter' />
                </button>
                <button>
                    <i className='fab fa-instagram' />
                </button>
            </div>
        </div>
    );
}

export default App;
