import React from 'react';
import * as Style from './Navbar.style';
import { NavItems } from './Constant';
import Theme from '../Theme/Theme';
import ThemeContext from '../../store/ThemeContext';
import { DARK_THEME } from '../../Helper/Constant';

const Navbar: React.FC<{ toggle: boolean }> = ({ toggle }) => {
  const { theme } = React.useContext(ThemeContext);
  return (
    <Style.Navbar className="menu-bar" isblacktheme={`${theme.value === DARK_THEME ? '1' : '0'}`}>
      {NavItems.map((item) => {
        return (
          <li className="nav-item" key={item.title}>
            <a href={item.url} target="_blank" rel="noreferrer">
              <span className="nav-icon"> {item.icon}</span>
              <span className="title"> {item.title}</span>
            </a>
          </li>
        );
      })}
      <Theme />
    </Style.Navbar>
  );
};
export default Navbar;
