import styled, { css } from 'styled-components';
import { DARK_THEME, ThemeInterface } from '../../Helper/Constant';

export const Header = styled.header<ThemeInterface>`
  ${(props) =>
    props.theme === DARK_THEME
      ? css`
          background-color: #1c2128;
          box-shadow: inset 0 -1px 0 #373e47;
        `
      : css`
          box-shadow: inset 0 #0000001c;
          background-color: #f5f5f5;
        `};

  font-size: 18px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h4 {
    margin: 0;
  }
`;
