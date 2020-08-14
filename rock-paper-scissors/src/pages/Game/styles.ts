import styled from 'styled-components';

import { colors } from '../../styles/variables';

export const Container = styled.div`
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`; 

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    border: 0.19rem solid ${colors.header_outline};
    border-radius: 1rem;
    width: 44rem;
    height: 9.2rem;
    margin: 3rem 0 4rem 0;
    z-index: 1;

    img {
        height: 6rem;
        margin-left: 1.8rem;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        background: #fff;
        border-radius: 0.5rem;
        width: 9.5rem;
        height: 7.1rem;
        margin-right: 1.5rem;
        
        span {
            color: ${colors.score_text};
            letter-spacing: 0.1rem;
        }

        h1 {
            color: ${colors.dark_text};
            font-size: 3.8rem;
            line-height: 3.8rem;
        }
    }
`;

export const Triangle = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 9rem);
    grid-template-rows: repeat(2, 14rem);
    grid-template-areas: 'left . right'
                         '. bottom .';
    position: relative;

    img {
        position: absolute;
        width: 20rem;
        top: 6rem;
        left: 0rem;
        right: 0;
        margin: auto;
        z-index: -1;
    }
`;

export const Result = styled.section`
    display: grid;
    grid-template-areas: 'userpick-description . housepick-description'
                         'userpick playagain housepick';
    gap: 3rem;
`;

export const PickDescription = styled.span<{ gridArea: string }>`
    color: #fff;
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.1rem;
    z-index: 1;

    grid-area: ${props => props.gridArea};
    justify-self: center;
`;

export const Picked = styled.div<{ gridArea: string }>`
    grid-area: ${props => props.gridArea};
    justify-self: center;
    text-align: center;
    align-self: center;
`;

export const PlayAgain = styled.div<{ gridArea: string }>`
    grid-area: ${props => props.gridArea};
    align-self: center;
    text-align: center;
    z-index: 1;

    span {
        display: block;
        color: #fff;
        font-size: 3.3rem;
        font-weight: 700;
        letter-spacing: 0.1rem;
    }

    button {
        font-size: 0.9rem;
        font-weight: 600;
        letter-spacing: 0.1rem;
        color: ${colors.dark_text};
        background: #fff;
        border: none;
        border-radius: 0.5rem;
        width: 13rem;
        height: 3rem;
        margin-top: 1rem;
        cursor: pointer;

        &:hover {
            color: hsl(349, 71%, 52%);
        }
    }
`;