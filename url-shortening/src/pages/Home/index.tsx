import React, { useState, FormEvent } from 'react';

import api from '../../services/api';

import LinkItem, { Link } from '../../components/LinkItem';
import CardItem from '../../components/CardItem';

import './styles.scss';

function Home() {
    const [link, setLink] = useState('');
    const [isInvalidLink, setIsInvalidLink] = useState(false);
    const [shortenedLinks, setShortenedLinks] = useState<Link[]>([]);

    function handleSubmitForm(e: FormEvent) {
        e.preventDefault();

        if (!link) {
            setIsInvalidLink(true);
        } else {
            api.post('/', {
                url: link
            }).then((response) => {
                const short = `https://rel.ink/${response.data.hashid}`;
                
                setShortenedLinks([
                    ...shortenedLinks,
                    { link, short }
                ]);
                
                setIsInvalidLink(false);
            }).catch(() => {
                setIsInvalidLink(true);
            });
        }
    }

    return (
        <div>
            <header className='header-container'>
                <img src='/images/logo.svg' alt='Logo' />
                <nav>
                    <ul>
                        <li>
                            <a href='/'>Features</a>
                        </li>
                        <li>
                            <a href='/'>Pricing</a>
                        </li>
                        <li>
                            <a href='/'>Resources</a>
                        </li>
                    </ul>
                </nav>
                <div className='auth-buttons'>
                    <button className='login-button'>Login</button>
                    <button className='signup-button'>Sign Up</button>
                </div>
            </header>

            <section className='get-started-container'>
                <div className='get-started-left'>
                    <h1>More than just shorter links</h1>
                    <p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
                    <button>Get Started</button>
                </div>
                
                <div className='get-started-right'>
                    <img src='/images/illustration-working.svg' alt='Illustration working' />
                </div>
            </section>

            <section className='shortener-and-statistics-container'>
                <div className='shortener-container'>
                    <form onSubmit={(e) => handleSubmitForm(e)} className={isInvalidLink ? 'shortener-form invalid-form' : 'shortener-form'}>
                        <input placeholder='Shorten a link here...' onChange={(e) => setLink(e.target.value)} />
                        {isInvalidLink && <p>Please add a link</p>}
                        <button type='submit'>Shorten It!</button>
                    </form>

                    <div>
                        {shortenedLinks.map((link: Link | any, index: number) => (
                            <LinkItem link={link.link} short={link.short} key={index} />
                        ))}
                    </div>
                </div>

                <div className='statistics-container'>
                    <div className='statistics-title'>
                        <h1>Advanced Statistics</h1>
                        <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
                    </div>

                    <div className='cards-container'>
                        <CardItem 
                            iconPath='/images/icon-brand-recognition.svg'
                            title='Brand Recognition'
                            description='Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.'
                        />

                        <CardItem 
                            iconPath='/images/icon-detailed-records.svg'
                            title='Detailed Records'
                            description='Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'
                            style={{ marginTop: '2rem' }}
                        />

                        <CardItem
                            iconPath='/images/icon-fully-customizable.svg'
                            title='Fully Customizable'
                            description='Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'
                            style={{ marginTop: '4rem' }}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;