import React, { useState, useEffect } from 'react';

import Pick from '../../components/Pick';
import Rules from '../../components/Rules';

import logoImg from '../../assets/images/logo.svg';
import triangleBg from '../../assets/images/bg-triangle.svg';

import { Container, Header, Triangle, Result, PickDescription, Picked, PlayAgain } from './styles';

function Game() {
    const [score, setScore] = useState(0);
    const [resultMessage, setResultMessage] = useState('');

    const [userPick, setUserPick] = useState('');
    const [housePick, setHousePick] = useState('');

    const [winner, setWinner] = useState('');

    useEffect(() => {
        if (userPick) {
            const picks = ['rock', 'paper', 'scissors'];
            const userPickIndex = picks.indexOf(userPick);
            picks.splice(userPickIndex, 1);
    
            const randomIndex = Math.floor(Math.random() * 2);
            setHousePick(picks[randomIndex]);
        }
    }, [userPick]);

    useEffect(() => {
        if (housePick) {
            let atualScore = score;

            if ((userPick === 'rock' && housePick === 'scissors') ||
                (userPick === 'scissors' && housePick === 'paper') ||
                (userPick === 'paper' && housePick === 'rock')) {
                atualScore = score + 1;
                setWinner(userPick);
                setResultMessage('YOU WIN');
            } else {
                atualScore = score > 0 ? score - 1 : 0;
                setWinner(housePick);
                setResultMessage('YOU LOSE');
            }
    
            setScore(atualScore);
        }
    }, [housePick])

    function handlePlayAgainButton() {
        setUserPick('');
        setHousePick('');
        setWinner('');
        setResultMessage('');
    }

    return (
        <Container>
            <Header>
                <img src={logoImg} alt='Logo' />
                <div>
                    <span>SCORE</span>
                    <h1>{score}</h1>
                </div>
            </Header>

            {!userPick &&
                <Triangle>
                    <Pick
                        name='paper'
                        size='small'
                        selectable={true}
                        onClick={() => setUserPick('paper')}
                        customStyle={{ gridArea: 'left' }}
                    />
                    <Pick
                        name='scissors'
                        size='small'
                        selectable={true}
                        onClick={() => setUserPick('scissors')}
                        customStyle={{ gridArea: 'right' }}
                    />
                    <Pick
                        name='rock'
                        size='small'
                        selectable={true}
                        onClick={() => setUserPick('rock')}
                        customStyle={{ gridArea: 'bottom' }}
                    />

                    <img src={triangleBg} alt='Triangle' />
                </Triangle>
            }

            {userPick &&
                <Result>
                    <PickDescription gridArea='userpick-description'>YOU PICKED</PickDescription>
                    
                    <Picked gridArea='userpick'>
                        <Pick
                            name={userPick}
                            size='large'
                            selectable={false}
                            customStyle={winner === userPick ? {
                                boxShadow: 'inset 0 -0.5rem #0005, 0 0 0 4rem rgba(31, 55, 86, 1), 0 0 0 8.5rem rgba(31, 55, 86, 0.4), 0 0 0 13rem rgba(31, 55, 86, 0.4)'
                            } : {}}
                        />
                    </Picked>

                    <PlayAgain gridArea='playagain'>
                        <span>{resultMessage}</span>
                        <button onClick={handlePlayAgainButton}>PLAY AGAIN</button>
                    </PlayAgain>

                    <PickDescription gridArea='housepick-description'>THE HOUSE PICKED</PickDescription>

                    <Picked gridArea='housepick'>
                        <Pick
                            name={housePick}
                            size='large'
                            selectable={false}
                            customStyle={winner === housePick ? {
                                boxShadow: 'inset 0 -0.5rem #0005, 0 0 0 4rem rgba(31, 55, 86, 1), 0 0 0 8.5rem rgba(31, 55, 86, 0.4), 0 0 0 13rem rgba(31, 55, 86, 0.4)'
                            } : {}}
                        />
                    </Picked>
                </Result>
            }
            <Rules />
        </Container>
    );
}

export default Game;
