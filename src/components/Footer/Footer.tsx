import React from 'react';
import styled from 'styled-components';
import ThemeContext from '../../store/ThemeContext';
import { isBlackTheme } from '../../Helper/Constant';

const Footer = () => {
  const { theme } = React.useContext(ThemeContext);
  const blackTheme = isBlackTheme(theme);

  return (
    <FooterComponent isblacktheme={blackTheme}>
      <p>
        {' '}
        Made by Anuj{' '}
        <svg
          //   title="Like Heart SVG File"
          width="21"
          height="21"
          viewBox="0 0 24 24"
          fill="red"
          stroke="red"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>{' '}
        Panwar{' '}
      </p>
    </FooterComponent>
  );
};
export default Footer;

const FooterComponent = styled.footer<{ isblacktheme: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  border-top: 1px solid
    ${(props) => (props.isblacktheme ? '#373e47' : 'rgba(220 ,220, 220, 1)')};

  p {
    display: flex;
    svg {
      margin: 0 5px;
    }
  }
`;
