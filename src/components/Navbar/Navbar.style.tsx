import styled, { css } from 'styled-components';

export const Navbar = styled.nav<{ isblacktheme: string }>`
  display: flex;
  align-items: center;
  gap: 50px;
  color: ${(props) => (+props.isblacktheme ? '#adbac7' : '#1c1c1c')};
  @media (max-width: 641px) {
    /* display: none; */
    flex-direction: column;
    position: absolute;
    right: 2%;
    background: black;
    gap: 15px;
    top: 10%;
    width: 60%;
    border-radius: 4px;
    align-items: flex-start;
    z-index: 1;
    padding: 10px 16px;
    ${(props) =>
      +props.isblacktheme
        ? css`
            background-color: #1c2128;
            box-shadow: inset 0 -1px 0 #373e47;
            border: 1px solid rgba(205, 217, 299, 0.1);
          `
        : css`
            border: 1px solid #dddddd;
            background-color: #f5f5f5;
          `};
  }
  li {
    cursor: pointer;
    height: 30px;
    width: 40px;
    list-style: none;
    position: relative;
    @media (min-width: 642px) {
      &:hover .title {
        transition: all 0.5s ease-in-out;
        transform: translate(-10px, 10px);
        opacity: 1;
        visibility: visible;
      }
      &:hover .nav-icon {
        opacity: 0;
        visibility: hidden;
        position: absolute;
        transform: translate(0, -100%);
      }
    }
    @media (max-width: 641px) {
      width: 100%;
      height: auto;
      a {
        display: flex;
        align-items: center;
        gap: 10px;
        text-decoration: none;
      }
    }
  }
  .nav-icon {
    transform: translate(0px, 0px);
  }
  svg {
    height: 24px;
    width: 24px;
    fill: ${(props) => (+props.isblacktheme ? '#adbac7' : '#1c1c1c')};
  }
  .title {
    color: #539bf5;
    font-size: 14px;
    position: absolute;
    transform: translate(-10px, 50px);
    display: flex;
    opacity: 0;
    visibility: hidden;
    @media (max-width: 641px) {
      opacity: 1;
      visibility: visible;
      transform: none;
      position: relative;
    }
  }
  .nav-icon {
    transition: all 0.5s ease-in-out;
  }
`;
