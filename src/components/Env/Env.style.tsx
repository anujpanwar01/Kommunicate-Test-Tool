import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  gap: 12px;

  & label {
    display: flex;
    gap: 6px;
    &,
    input {
      cursor: pointer;
    }
  }
`;
