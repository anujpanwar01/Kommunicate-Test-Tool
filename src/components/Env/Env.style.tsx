import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & label {
    display: flex;
    gap: 10px;
    &,
    input {
      cursor: pointer;
    }
  }
`;
