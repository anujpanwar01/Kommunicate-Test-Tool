import styled from 'styled-components';

export const Navbar = styled.nav<{ isblacktheme: string }>`
  display: flex;
  align-items: center;
  gap: 50px;
  color: ${(props) => (+props.isblacktheme ? '#adbac7' : '#1c1c1c')};

  li {
    cursor: pointer;
    height: 30px;
    width: 40px;
    list-style: none;
    position: relative;

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
  }
  .nav-icon {
    transition: all 0.5s ease-in-out;
  }
`;
