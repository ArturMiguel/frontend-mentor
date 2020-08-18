import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    padding: 0 10%;
    background: linear-gradient(${props => props.theme.colors.backgroundTop} 18rem, transparent 0);
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2.5rem 0 3rem 0;

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const HeaderTitle = styled.div`
    h1 {
        font-size: 1.8rem;
        color: ${props => props.theme.colors.primary};
    }

    p {
        font-weight: 700;
        color: ${props => props.theme.colors.secondary};
    }
`;

export const HeaderLineDivider = styled.hr`
    width: 100%;
    margin: 1rem 0;
    color: ${props => props.theme.colors.secondary};
    display: none;

    @media (max-width: 600px) {
        display: block;
    }
`;

export const ThemeSwitcher = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 9.5rem;

    span {
        font-weight: 700;
        color: ${props => props.theme.colors.secondary};
    }
    
    /* Override react-switch default styles */
    .react-switch-bg {
        background: ${props => props.theme.colors.toggle} !important;
        cursor: pointer;
    }

    @media (max-width: 600px) {
        width: 100%;
    }
`

export const MainCards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    gap: 1.5rem;
`;

export const OverviewTitle = styled.h1`
    margin: 3rem 0 1.8rem 0;
    color: ${props => props.theme.colors.secondary};
    font-size: 1.6rem;
`;

export const OverviewCards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
`