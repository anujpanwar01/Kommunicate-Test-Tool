import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgb(221 221 221);
  width: 45%;
  padding: 40px 16px;
  @media (max-width: 1000px) {
    width: 100%;
    padding: 20px 0;
    border: none !important;
  }
  & > div {
    margin-bottom: 16px;
  }
  .monaco-editor {
    padding: 10px 0 0;
  }
`;
