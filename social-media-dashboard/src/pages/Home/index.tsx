import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import facebookIcon from '../../assets/icons/icon-facebook.svg';
import twitterIcon from '../../assets/icons/icon-twitter.svg';
import instagramIcon from '../../assets/icons/icon-instagram.svg';
import youtubeIcon from '../../assets/icons/icon-youtube.svg';

import Card from '../../components/Card';
import SmallCard from '../../components/SmallCard';

import {
    Container,
    Header,
    HeaderTitle,
    ThemeSwitcher,
    MainCards,
    OverviewCards,
    OverviewTitle,
    HeaderLineDivider
} from './styles';

interface Props {
    toggleTheme: () => void;
}

const Home: React.FC<Props> = ({ toggleTheme }) => {
    const { themeName } = useContext(ThemeContext);

    return (
        <Container>
            <Header>
                <HeaderTitle>
                    <h1>Social Media Dashboard</h1>
                    <p>Total Followers: 23,004</p>
                </HeaderTitle>
                
                <HeaderLineDivider />

                <ThemeSwitcher>
                    <span>Dark Mode</span>
                    <Switch 
                        onChange={toggleTheme}
                        checked={themeName === 'light'}
                        checkedIcon={false}
                        uncheckedIcon={false}
                        onHandleColor='#fff'
                        offHandleColor='#1e202a'
                        handleDiameter={18}
                        width={46}
                        height={22}
                    />
                </ThemeSwitcher>
            </Header>

            <MainCards>
                <Card
                    icon={facebookIcon}
                    social='facebook'
                    status='positive'
                    username='@nathanf'
                    totalFollowers='1987'
                    followersToday='12'
                />
                <Card
                    icon={twitterIcon}
                    social='twitter'
                    status='positive'
                    username='@nathanf'
                    totalFollowers='1044'
                    followersToday='90'
                />
                <Card
                    icon={instagramIcon}
                    social='instagram'
                    status='positive'
                    username='@realnathanf'
                    totalFollowers='11k'
                    followersToday='1099'
                />
                <Card
                    icon={youtubeIcon}
                    social='youtube'
                    status='negative'
                    username='Nathan F.'
                    totalFollowers='8239'
                    followersToday='144'
                />
            </MainCards>
            
            <OverviewTitle>Overview - Today</OverviewTitle>

            <OverviewCards>
                <SmallCard 
                    title='Page Views'
                    icon={facebookIcon}
                    data='87'
                    percent='3%'
                    status='positive'
                />
                <SmallCard 
                    title='Likes'
                    icon={facebookIcon}
                    data='52'
                    percent='2%'
                    status='negative'
                />
                <SmallCard 
                    title='Likes'
                    icon={instagramIcon}
                    data='5462'
                    percent='2257%'
                    status='positive'
                />
                <SmallCard 
                    title='Profile Views'
                    icon={instagramIcon}
                    data='52k'
                    percent='1375%'
                    status='positive'
                />
                <SmallCard 
                    title='Retweets'
                    icon={twitterIcon}
                    data='117'
                    percent='303%'
                    status='positive'
                />
                <SmallCard 
                    title='Likes'
                    icon={twitterIcon}
                    data='507'
                    percent='553%'
                    status='positive'
                />
                <SmallCard 
                    title='Likes'
                    icon={youtubeIcon}
                    data='107'
                    percent='19%'
                    status='negative'
                />
                <SmallCard 
                    title='Total Views'
                    icon={youtubeIcon}
                    data='1407'
                    percent='12%'
                    status='negative'
                />
            </OverviewCards>
        </Container>
    );
}

export default Home;
