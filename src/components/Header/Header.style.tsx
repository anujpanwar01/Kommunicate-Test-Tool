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
          border-bottom: 1px solid #dddddd;
          background-color: #f5f5f5;
        `};

  font-size: 18px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 641px) {
    padding: 8px 10px;
  }
  .menu-open + nav {
    display: flex;
  }

  .menu-close + nav {
    display: none;
  }

  h4 {
    margin: 0;
  }
  .hamburger {
    .line {
      ${(props) =>
        props.theme === DARK_THEME
          ? css`
              background-color: #adbac7;
              box-shadow: inset 0 -1px 0 #373e47;
            `
          : css`
              border-bottom: 1px solid #dddddd;
              background-color: #1c1c1c;
            `};

      width: 40px;
      height: 2px;
      margin: 8px auto;
      transition: all 0.3s ease-in-out;
      border-radius: 5px;
    }
  }
`;
