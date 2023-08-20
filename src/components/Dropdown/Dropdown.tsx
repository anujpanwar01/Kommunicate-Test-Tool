import React from 'react';
import Select, {
  DropdownIndicatorProps,
  components,
  OptionProps,
  ControlProps,
  Props as SelectProps,
} from 'react-select';
import { isBlackTheme } from '../../Helper/Constant';
import styled from 'styled-components';
import { DropdownIcon } from '../../Svgs/Svg';
import ThemeContext from '../../store/ThemeContext';
import { getStyle, Menu, MenuList } from './utils';

export interface DropdownInterface {
  controlBg: string;
  menuBg: string;
  // labelColor: string;
}

const Dropdown: React.FC<SelectProps & { customStyle: DropdownInterface }> = ({
  defaultValue,
  className,
  options,
  customStyle,
  onChange,
  ...props
}) => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <StyleSelect
      className={'dropdown' + ' ' + className}
      isblacktheme={isBlackTheme(theme)}
      isSearchable={false}
      defaultValue={defaultValue}
      onChange={onChange}
      components={{ DropdownIndicator, Option, Control, Menu, MenuList }}
      options={options}
      styles={getStyle(theme, customStyle)}
      {...props}
    />
  );
};

const StyleSelect = styled(Select)<{ isblacktheme: string }>`
  .dropdown-svg {
  }
  .dropdown-control {
    ${(props) => (+props.isblacktheme ? '#1c2128' : 'inherit')}
  }
  .dropdown_option-is-focused {
    background-color: lightblue;
  }
  .dropdown-menu-list {
  }
`;
export default Dropdown;

const DropdownIndicator: React.FC<DropdownIndicatorProps> = (props) => {
  const { theme } = React.useContext(ThemeContext);
  const blackBg = isBlackTheme(theme);
  return (
    <components.DropdownIndicator className="dropdown-svg" {...props}>
      <DropdownIcon pathFill={+blackBg ? '#adbac7' : '#1c2128'} />
    </components.DropdownIndicator>
  );
};

const Option: React.FC<OptionProps> = (props) => {
  const { cx, isDisabled, isFocused, isSelected } = props;
  return (
    <components.Option
      className={cx(
        {
          option: true,
          'option--is-disabled': isDisabled,
          'option--is-focused': isFocused,
          'option--is-selected': isSelected,
        },
        'dropdown',
      )}
      {...props}
    ></components.Option>
  );
};

const Control: React.FC<ControlProps> = (props) => {
  return <components.Control className="dropdown-control" {...props} />;
};
