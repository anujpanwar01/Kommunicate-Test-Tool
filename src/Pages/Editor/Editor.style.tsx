import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgb(221 221 221);
  width: 45%;
  padding: 40px 16px;
  & > div {
    margin-bottom: 16px;
  }
  .monaco-editor {
    padding: 10px 0 0;
  }
`;
