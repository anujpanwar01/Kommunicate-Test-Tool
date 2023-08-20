import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  height: 86vh;
  input {
    width: 350px;
    height: 24px;
  }
  button {
    width: 150px;
    border-radius: 24px;
    cursor: pointer;
  }
`;
