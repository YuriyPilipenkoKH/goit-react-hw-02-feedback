import styled from '@emotion/styled';

export const BtnWrapper = styled.button`
    display: flex;
    flex-direction: column;
    gap: 16px;
    border: none;
    background-color: transparent;
    padding: 0;

`

export const Btn = styled.button`
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    text-transform: uppercase;
    background-color: #f8d24e;
    width: 100px;
    border:  transparent;
    border-radius: 10px;
    color: #000000;

    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;

    transition: all 0.4s;
    cursor: pointer;

    :hover  {
    outline: none;
    background-color: #0A8817;
    color: #fbf7f3;

    }
`