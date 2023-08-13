import React from 'react';
import * as Style from './Header.style';
import Navbar from '../Navbar/Navbar';
import ThemeContext from '../../store/ThemeContext';

const Header: React.FC = () => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <Style.Header theme={theme?.value}>
      <h4>Test Tool</h4>
      <Navbar />
    </Style.Header>
  );
};

export default Header;
