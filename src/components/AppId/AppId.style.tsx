import styled from 'styled-components';

export const AppIdContainer = styled.div`
  display: flex;
  @media (max-width: 641px) {
    flex-direction: column;
    gap: 12px;
  }
  div {
    width: 80%;

    @media (max-width: 641px) {
      width: 100%;
    }
  }
  input {
    font-size: 16px;
    padding: 12px 16px;
    width: 90%;
    @media (max-width: 641px) {
      width: 100%;
    }
  }
  button {
    padding: 12px 16px;
    /* border-radius: 24px; */
    width: 160px;
    cursor: pointer;
    @media (max-width: 641px) {
      width: 100%;
    }
  }
`;
