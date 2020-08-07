import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 0;
    cursor: default;
`;

export const Title = styled.h1`
    font-size: 30px;
    color: hsl(233, 13%, 49%);
    margin-bottom: 40px;
`;

export const Toggle = styled.div`
    display: flex;
    align-items: center;

    span {
        font-size: 15px;
        color: hsl(234, 14%, 74%);
    }

    div {
        position: relative;
        width: 55px;
        height: 30px;
        background: hsl(237, 63%, 64%);
        &:hover {
            background: hsl(236, 72%, 79%);
        }

        border-radius: 20px;
        margin: 0 20px;
        cursor: pointer;

        &::after {
            content: '';
            position: absolute;
            width: 22px;
            height: 22px;
            background: #fff;
            border-radius: 50%;

            top: 50%;
            left: 50%;
            transform: ${props => props.checked ? 'translate(-100%, -50%)' : 'translateY(-50%)'};
            transition: .4s;
        }
    }
`;

export const PlanList = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    margin-top: 60px;

    @media(max-width: 1030px) {
        flex-direction: column;
    }
`;
