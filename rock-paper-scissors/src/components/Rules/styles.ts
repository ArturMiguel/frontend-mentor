import styled from 'styled-components';

import { colors } from '../../styles/variables';

export const Button = styled.button`
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 0.1rem;
    color: #fff;
    background: none;
    border: none;
    border-radius: 0.5rem;
    border: 0.19rem solid ${colors.header_outline};
    width: 9rem;
    height: 3rem;
    cursor: pointer;

    position: absolute;
    right: 2rem;
    bottom: 2rem;

    &:hover {
        opacity: 0.8;
    }
`;

export const RulesContainer = styled.div`
    background: #fff;
    border-radius: 0.5rem;
    padding: 2rem;
    width: 20rem;
    height: 24rem;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: 1;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h1 {
            font-size: 2rem;
            color: ${colors.dark_text};
        }

        img {
            width: 1.2rem;
            height: 1.2rem;
            cursor: pointer;
        }
    }

    & > img {
        width: 100%;
        margin-top: 3rem;
    }
`;
