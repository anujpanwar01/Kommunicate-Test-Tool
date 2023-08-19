import { useContext, useState } from 'react';
import * as Style from './Theme.style';
import Dropdown from '../Dropdown/Dropdown';
import { THEME_DROPDOWN } from '../../Helper/Constant';
import ThemeContext from '../../store/ThemeContext';

const Theme: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { theme: defaultValue, onChangeHandler } = useContext(ThemeContext);

  const dropdownClickHandler = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <Style.Theme>
      <Style.IconContainer onClick={dropdownClickHandler}>
        <Dropdown
          className="theme-dropdown"
          defaultValue={defaultValue}
          options={THEME_DROPDOWN}
          onChangeHandler={onChangeHandler}
        />
      </Style.IconContainer>
    </Style.Theme>
  );
};
export default Theme;
