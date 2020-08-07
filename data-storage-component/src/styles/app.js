import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    .components {
        display: flex;
        align-items: flex-end;
    }

    @media(max-width: 950px) {
        .components {
            flex-direction: column;
        }
    }
`