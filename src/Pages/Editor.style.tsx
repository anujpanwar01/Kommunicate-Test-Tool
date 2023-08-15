import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid blue;
  border-radius: 24px;

  width: 600px;
  margin: 30px 0 0 18px;
  padding: 20px 16px;
  & > div {
    margin-bottom: 16px;
  }
  .monaco-editor {
    padding: 10px 0 0;
  }
`;
