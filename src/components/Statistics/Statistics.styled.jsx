import styled from '@emotion/styled';

export const StatList = styled.li`
  background-color: rgb(201, 245, 235);
  margin: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`


export const StatItem = styled.li`
  margin-bottom: 5px;
  font-size: 16px;

  :last-child {
  margin-bottom: 0px;
}
`