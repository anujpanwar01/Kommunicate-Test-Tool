import React from 'react';
import * as Style from './Navbar.style';
import { NavItems } from './Constant';
import Theme from '../Theme/Theme';

const Navbar: React.FC = () => {
  return (
    <Style.Navbar>
      {NavItems.map((item) => {
        return (
          <li className="nav-item">
            <a href={item.url} target="_blank" rel="noreferrer">
              <span className="title show-title"> {item.icon}</span>
            </a>
            <span className="title hide-title"> {item.title}</span>
          </li>
        );
      })}
      <Theme />
    </Style.Navbar>
  );
};
export default Navbar;
