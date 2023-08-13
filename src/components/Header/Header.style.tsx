import styled, { css } from 'styled-components';
import { DARK_THEME, ThemeInterface } from '../../Helper/Constant';

export const Header = styled.header<ThemeInterface>`
  ${(props) =>
    props.theme === DARK_THEME
      ? css`
          color: #1c1c1c;
          background-color: #ffffff;
        `
      : css`
          background-color: #f5f5f5;
        `};
  box-shadow: 0 2px 5px #0000001c;
  font-size: 18px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h4 {
    margin: 0;
  }
`;
