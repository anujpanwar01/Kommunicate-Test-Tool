import React from 'react';
import styled from 'styled-components';
import ThemeContext from '../../store/ThemeContext';
import { DARK_THEME } from '../../Helper/Constant';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <ButtonStyle
      {...props}
      isblacktheme={`${theme.value === DARK_THEME ? '1' : '0'}`}
    >
      {children}
    </ButtonStyle>
  );
};

export default Button;

const ButtonStyle = styled.button<ButtonProps & { isblacktheme: string }>`
  padding: 12px 16px;
  background: ${(props) => (+props.isblacktheme ? '#373e47' : ' whitesmoke')};
  border: 1px solid
    ${(props) => (+props.isblacktheme ? 'rgba(205,217,299,0.1)' : '#dcdcdc')};
  &:hover,
  &:focus,
  &:active {
    background: ${(props) => (+props.isblacktheme ? '#444c56' : ' whitesmoke')};
  }
`;
