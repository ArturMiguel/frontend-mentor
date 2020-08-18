import styled, { css } from 'styled-components';

interface ContainerProps {
    social: string;
}

interface FooterProps {
    status: string;
}

export const Container = styled.div<ContainerProps>`
    text-align: center;
    border-radius: 0.5rem;
    border-top: 0.3rem solid;
    background: ${props => props.theme.colors.cardBackground};
    padding: 2rem 0 1.5rem 0;

    border-color: ${props => 
        props.social === 'facebook' ? props.theme.colors.facebook
        : props.social === 'twitter' ? props.theme.colors.twitter
        : props.social === 'youtube' ? props.theme.colors.youtube
        : 'transparent'
    };

    ${props => props.social === 'instagram' && css`
        border-image: ${props => props.theme.colors.instagram};
        border-image-slice: 1;
    `}

    &:hover {
        cursor: pointer;
        background: ${props => props.theme.colors.cardBackgroundHover};
        transition: background .2s;
    }
`;

export const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        margin-right: 0.5rem;
    }

    span {
        font-weight: 700;
        font-size: 0.8rem;
        color: ${props => props.theme.colors.secondary}
    }
`;

export const Middle = styled.div`
    margin: 1.5rem 0;

    h1 {
        font-size: 3.5rem;
        color: ${props => props.theme.colors.primary}
    }

    p {
        font-size: 0.85rem;
        letter-spacing: 0.3rem;
        color: ${props => props.theme.colors.secondary};
    }
`;

export const Footer = styled.footer<FooterProps>`
    span {
        font-size: 0.8rem;
        font-weight: 700;

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