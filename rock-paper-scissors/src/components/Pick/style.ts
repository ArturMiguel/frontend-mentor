import styled, { css } from 'styled-components';

interface ButtonProps {
    color: string;
    icon: string;
    size: string;
    selectable: boolean;
}

export const Button = styled.button<ButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;

    background: linear-gradient(to bottom, ${props => props.color});
    box-shadow: inset 0 -0.5rem #0005;
    border: none;
    border-radius: 50%;
    width: 12.5rem;
    height: 12.5rem;
    padding: 1.5rem;

    &:before {
        content: '';
        background: #fff url(${props => props.icon}) center no-repeat;
        background-size: 45%;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        box-shadow: inset 0 0.5rem #0002;
    }

    ${props => props.size === 'large' && css`
        width: 18rem;
        height: 18rem;
        padding: 2.1rem;
        box-shadow: inset 0 -0.7rem #0005;

        &:before {
            box-shadow: inset 0 0.7rem #0002;
        }
    `}

    ${props => props.selectable && css`
        cursor: pointer;

        &:hover {
            transform: translateY(0.5rem);
            transition: .2s;
        }
    `}

    @media (max-width: 800px) {
        & {
            box-shadow: inset 0 -0.5rem #0005;
            width: 12.5rem;
            height: 12.5rem;
            padding: 1.5rem;

            &:before {
                box-shadow: inset 0 0.5rem #0002;
            }
        }
    }
`;
