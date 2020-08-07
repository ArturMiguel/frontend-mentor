import styled, { css } from 'styled-components';

function setBorderRadius(position) {
    if (position === 'left') return '10px 0 0 10px';
    if (position === 'right') return '0 10px 10px 0';
    return '10px';
}

export const Container = styled.div`
    background: #fff;
    padding: 30px;
    width: 340px;
    border-radius: ${props => setBorderRadius(props.position)};
    cursor: default;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${props => props.position === 'center' && css`
        background: linear-gradient(to bottom, hsl(236, 72%, 79%), hsl(237, 63%, 64%));
        padding: 50px 30px;
        
        ${Title}, ${Price}, ${List} {
            color: #fff;
        }
        ${Button} {
            color: hsl(237, 63%, 64%);
            background: #fff;

            &:hover {
                color: #fff;
                background: transparent;
                border: solid 1px #fff;
            }
        }
    `}

    @media(max-width: 1030px) {
        padding: 30px;
        border-radius: 10px;
        &:nth-child(2) {
            margin: 20px 0;
        }
    }
`;

export const Title = styled.h3`
    font-size: 17px;
    color: hsl(233, 13%, 49%);
`;

export const Price = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    color: hsl(232, 13%, 33%);
    margin: 20px 0;

    .simbol {
        font-size: 30px;
        margin-right: 10px;
    }
    .price {
        font-size: 60px;
    }
`;

export const List = styled.ul`
    list-style: none;
    font-size: 0.9em;
    color: hsl(233, 13%, 49%);
    margin-bottom: 30px;
    width: 100%;
    text-align: center;

    li {
        border-top: solid 1px hsl(234, 14%, 74%);
        &:last-child {
            border-bottom: solid 1px hsl(234, 14%, 74%);
        }
        padding: 15px 0;
    }
`;

export const Button = styled.button`
    width: 100%;
    border-radius: 5px;
    background: linear-gradient(to right, hsl(236, 72%, 79%),  hsl(237, 63%, 64%));
    color: #fff;
    border: none;
    font-size: 13px;
    font-weight: 700;
    line-height: 45px;
    cursor: pointer;
    border: solid 1px transparent;

    &:hover {
        color: hsl(237, 63%, 64%);
        background: #fff;
        border: solid 1px hsl(237, 63%, 64%);
    }
    transition: .4s;
`;