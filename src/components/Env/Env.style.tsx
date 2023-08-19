import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  gap: 24px;

  & label {
    display: flex;
    gap: 6px;
    &,
    input {
      cursor: pointer;
    }
  }
`;
