import React from 'react';
import styled from 'styled-components';

const Input: React.FC<Props> = ({ type, value, onChange }) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onChange(e);

  return (
    <InputContainer>
      <input type={type} onChange={handleOnChange} value={value} />
    </InputContainer>
  );
};

export default Input;

type Props = {
  type: string;
  value: string | number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const InputContainer = styled.div`
  input {
  }
`;
