import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  height: 80vh;
  input {
    width: 300px;
    padding: 12px 16px;
  }
  button {
    width: 150px;
    border-radius: 24px;
    cursor: pointer;
  }
`;
