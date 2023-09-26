import React from 'react';
import * as Style from './Header.style';
import Navbar from '../Navbar/Navbar';
import ThemeContext from '../../store/ThemeContext';

const Header: React.FC = () => {
  const [toggle, setToggle] = React.useState(false);
  const { theme } = React.useContext(ThemeContext);

  return (
    <Style.Header theme={theme?.value}>
      <h4>Test Tool</h4>
      <div
        className={`hamburger ${toggle ? 'menu-open' : 'menu-close'}`}
        onClick={() => setToggle(!toggle)}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <Navbar toggle={toggle} />
    </Style.Header>
  );
};

export default Header;
