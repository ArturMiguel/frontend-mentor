import styled from 'styled-components';

export const Container = styled.div`
    width: 530px;
    padding: 40px;
    background: hsl(228, 56%, 26%);
    border-radius: 8px;
    position: relative;

    @media(max-width: 950px) {
        width: 350px;
    }
`;

export const Header = styled.div`
    color: #fff;
    font-weight: 400;
    margin-bottom: 17px;

    span {
        font-weight: 700;
    }

    @media(max-width: 950px) {
        text-align: center;
    }
`

export const ProgressBar = styled.div`
    background: hsl(229, 57%, 11%);
    padding: 3px;
    border-radius: 20px;
    line-height: 13px;
    
    .progress {
        width: ${props => props.progress}%;
        background: linear-gradient(to right, hsl(6, 100%, 80%), hsl(335, 100%, 65%));
        border-radius: 20px;
        position: relative;

        &::after {
            content: '';
            float: right;
            height: 10px;
            width: 10px;
            background: #fff;
            border-radius: 10px;

            position: absolute;
            right: 1px;
            top: 50%;
            transform: translateY(-50%)
        }
    }
`

export const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    margin-top: 12px;
`

export const Ballon = styled.div`
    background: #fff;
    position: absolute;
    top: -45px;
    border-radius: 10px 10px 0 10px;
    padding: 10px 20px;

    display: flex;
    align-items: center;
    right: 0;
    margin-right: 40px;

    &::after {
        content: '';
        border-left: 20px solid transparent;
        border-top: 20px solid #fff;
        bottom: -18px;
        position: absolute;
        right: 0;
    }

    @media(max-width: 950px) {
        &::after {
            border: none;
        }

        border-radius: 10px;
        top: 130px;
        margin-right: 0;
        right: 100px;
    }
`
