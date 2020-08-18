import styled, { css } from 'styled-components';

export const Container = styled.div`
    border-radius: 0.5rem;
    background: ${props => props.theme.colors.cardBackground};
    padding: 1.5rem;

    &:hover {
        cursor: pointer;
        background: ${props => props.theme.colors.cardBackgroundHover};
        transition: background .2s;
    }
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;

    span {
        font-weight: 700;
        font-size: 0.85rem;
        color: ${props => props.theme.colors.secondary}
    }
`;

interface FooterProps {
    status: string;
}

export const Footer = styled.footer<FooterProps>`
    display: flex;
    justify-content: space-between;

    span:first-child {
       font-size: 2rem;
       line-height: 1.6rem;

       font-weight: 700;
       color: ${props => props.theme.colors.primary};
    }

    span:last-child {
        font-size: 0.8rem;
        font-weight: 700;
        align-self: flex-end;

        ${props => props.status === 'positive'
            ? css`
                color: ${props => props.theme.colors.positiveFollowers};
                &:before {
                    content: '⯅'
                }
            `
            : css`
                color: ${props => props.theme.colors.negativeFollowers};
                &:before {
                    content: '⯆'
                }
            `
        }
    }
`;

