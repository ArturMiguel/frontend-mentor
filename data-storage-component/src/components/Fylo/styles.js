import styled from 'styled-components';

export const Container = styled.div`
    width: 350px;
    padding: 40px;
    background: hsl(228, 56%, 26%);
    border-radius: 8px;
    border-top-right-radius: 110px;
    margin-right: 40px;

    @media(max-width: 950px) {
        margin-right: 0;
        margin-bottom: 20px;
    }
`;

export const Icons = styled.div`
    display: flex;
    width: fit-content;
    
    div {
        width: 48px;
        height: 48px;
        background: hsl(229, 57%, 11%);
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;

        & + div {
            margin-left: 15px;
        }
    }
`
