import React, { useContext } from 'react';
import styled from 'styled-components';
import { DARK_THEME } from '../../Helper/Constant';
import ThemeContext from '../../store/ThemeContext';

const Input: React.FC<InputProps> = ({
  id,
  type,
  value,
  placeholder,
  onChange,
  ...props
}) => {
  const { theme } = useContext(ThemeContext);
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onChange(e);

  return (
    <InputContainer isblacktheme={`${theme.value === DARK_THEME ? '1' : '0'}`}>
      <input
        id={id}
        type={type}
        onChange={handleOnChange}
        value={value}
        placeholder={placeholder}
        {...props}
      />
    </InputContainer>
  );
};

export default Input;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  type: string;
  value: string | number;
  placeholder?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const InputContainer = styled.div<{ isblacktheme: string }>`
  input {
    font-size: 16px;
    border: 1px solid
      ${(props) => {
     
        return +props.isblacktheme
          ? 'rgba(205,217,299,0.1)'
          : ' rgb(220, 220, 220)';
      }};
    color: ${(props) => (+props.isblacktheme ? '#adbac7' : 'rgb(28, 28, 28)')};
    padding: 12px 16px;
    border-radius: 4px;
    background: ${(props) => (+props.isblacktheme ? '#1c2128' : 'inherit')};
  }
`;
