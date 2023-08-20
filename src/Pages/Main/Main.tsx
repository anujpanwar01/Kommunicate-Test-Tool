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
  &,
  & > div {
    /* height: 100%; */
  }
`;
