import { useContext, useEffect, useState } from 'react';
import * as Style from './Theme.style';
import Dropdown from '../Dropdown/Dropdown';
import { DARK_THEME, THEME_DROPDOWN } from '../../Helper/Constant';
import ThemeContext from '../../store/ThemeContext';
import LocalStorage from '../../LocalStorage/LocalStorage';

const Theme: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { theme: defaultValue, onChangeHandler } = useContext(ThemeContext);

  useEffect(() => {
    LocalStorage.setItem('theme', LocalStorage.stringify(defaultValue));
  }, [defaultValue]);

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
          onChange={onChangeHandler}
          customStyle={{
            controlBg:
              defaultValue.value === DARK_THEME ? '#1c2128' : 'inherit',
            menuBg: defaultValue.value === DARK_THEME ? '#373e47' : 'inherit',
          }}
        />
      </Style.IconContainer>
    </Style.Theme>
  );
};
export default Theme;
