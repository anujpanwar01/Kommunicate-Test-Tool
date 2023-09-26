import React from 'react';
import styled from 'styled-components';
import Editor from '../Editor/Editor';

const Main: React.FC = () => {
  return (
    <MainContainer>
      <Editor />
    </MainContainer>
  );
};
export default Main;

const MainContainer = styled.section`
  @media (max-width: 641px) {
    padding: 0 10px;
  }
  &,
  & > div {
    /* height: 100%; */
  }
`;
