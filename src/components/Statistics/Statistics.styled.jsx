import styled from '@emotion/styled';

export const StatList = styled.ul`
  list-style  : none ;
  width: 250px;
  margin: 0;
  padding: 20px 4px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
`


export const StatItem = styled.li`

  font-size: 16px;
    display: inline-flex;
    align-items: center;
    gap: 12px;
    padding: 8px 16px;
    width: 125px;
    height: 40px;
    color: var(--black);
    background-color: var(--yellow);
    border:  transparent;
    border-radius: 10px;
    box-shadow: var(--shadow-four);

    :last-child {
        width: 240px;
    }
`