import styled from 'styled-components';

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  gap: 50px;
  color: #00000087;

  li {
    list-style: none;
  }
  svg {
    height: 24px;
    width: 24px;
    fill: #00000087;
  }
  .hide-title {
    display: none;
  }
`;
