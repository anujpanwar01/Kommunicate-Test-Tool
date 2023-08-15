import React from 'react';
import * as Style from './Navbar.style';
import { NavItems } from './Constant';
import Theme from '../Theme/Theme';

const Navbar: React.FC = () => {
  // const [lit]
  // show-title
  return (
    <Style.Navbar>
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
