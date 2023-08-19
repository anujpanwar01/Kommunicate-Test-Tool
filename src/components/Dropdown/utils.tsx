import {
  MenuProps,
  MenuListProps,
  StylesConfig,
  components,
} from 'react-select';
import { OptionInterface, isBlackTheme } from '../../Helper/Constant';

export const getStyle = (theme: OptionInterface) => {
  const blackTheme = +isBlackTheme(theme);

  const CUSTOM_STYLE: StylesConfig = {
    control: (style) => {
      return { ...style, backgroundColor: blackTheme ? '#1c2128' : 'inherit' };
    },
    menu: (style) => {
      console.log(style);
      return {
        ...style,
        marginTop: '16px',
        backgroundColor: blackTheme ? '#373e47' : 'inherit',
      };
    },
    menuList: (style) => {
      return { ...style };
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
