import styled from '@emotion/styled';

export const BtnWrapper = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 16px;
    border: none;
    background-color: transparent;
    padding: 20px 4px;

`

export const Btn = styled.button`
    font-weight: 600;
    font-size: 16px;
    line-height: 17px;
    text-transform: uppercase;
    background-color: var(--yellow);background-color: var(--yellow);
    width: 120px;
    border:  transparent;
    border-radius: 10px;
    color: var(--black);

    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;

    transition: all 0.4s;
    cursor: pointer;
    box-shadow: var(--shadow-four);

    :hover,
    :focus  {
    outline: none;
    background-color: var(--green);
    color: #fbf7f3;
    box-shadow: var(--shadow-two);    
    }
`