import {
  MenuProps,
  MenuListProps,
  StylesConfig,
  components,
} from 'react-select';
import { OptionInterface, isBlackTheme } from '../../Helper/Constant';
import { DropdownInterface } from './Dropdown';

export const getStyle = (
  theme: OptionInterface,
  customStyle: DropdownInterface,
) => {
  const blackTheme = +isBlackTheme(theme);

  const CUSTOM_STYLE: StylesConfig = {
    control: (style) => {
      return {
        ...style,
        backgroundColor: customStyle.controlBg,
        borderColor: +blackTheme ? 'rgba(205,217,299,0.1)' : '#dcdcdc',
      };
    },
    menu: (style) => {
      return {
        ...style,
        marginTop: '16px',
        backgroundColor: customStyle.menuBg,
      };
    },
    menuList: (style) => {
      return { ...style };
    },
    singleValue: (style) => {
      return { ...style, color: 'inherit', fontSize: '14px' };
    },
    option: (provided, state) => {
      return {
        ...provided,
        backgroundColor: state.isSelected
          ? '#007bff'
          : state.isFocused && state.isSelected
          ? '#007bff'
          : 'inherit',
        ':active': {
          color: 'white',
        },
        ':hover': {
          backgroundColor: '#007bff',
          color: 'white',
        },
      };
    },
  };
  return CUSTOM_STYLE;
};

export const Menu: React.FC<MenuProps> = (props) => {
  return <components.Menu className="dropdown-menu" {...props} />;
};

export const MenuList: React.FC<MenuListProps> = (props) => {
  return <components.MenuList className="dropdown-menu-list" {...props} />;
};
