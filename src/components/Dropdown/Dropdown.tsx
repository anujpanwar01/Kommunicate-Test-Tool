import React from 'react';
import Select, {
  DropdownIndicatorProps,
  components,
  OptionProps,
  ControlProps,
  StylesConfig,
} from 'react-select';
import { OptionInterface, isBlackTheme } from '../../Helper/Constant';
import styled from 'styled-components';
import { DropdownIcon } from '../../Svgs/Svg';
import ThemeContext from '../../store/ThemeContext';
import { getStyle, Menu, MenuList } from './utils';

const Dropdown: React.FC<{
  className?: string;
  defaultValue: OptionInterface;
  options: OptionInterface[];
  onChangeHandler: (option: OptionInterface | null) => void;
}> = ({ defaultValue, className, options, onChangeHandler }) => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <StyleSelect
      className={className}
      isblacktheme={isBlackTheme(theme)}
      isSearchable={false}
      defaultValue={defaultValue}
      onChange={(option) => {
        onChangeHandler(option as OptionInterface | null);
      }}
      components={{ DropdownIndicator, Option, Control, Menu, MenuList }}
      options={options}
      styles={getStyle(theme)}
    />
  );
};

const StyleSelect = styled(Select)<{ isblacktheme: string }>`
  .dropdown-svg {
  }
  .dropdown-control {
    ${(props) => (+props.isblacktheme ? '#1c2128' : 'inherit')}
  }
`;
export default Dropdown;

const DropdownIndicator: React.FC<DropdownIndicatorProps> = (props) => {
  return (
    <components.DropdownIndicator className="dropdown-svg" {...props}>
      <DropdownIcon />
    </components.DropdownIndicator>
  );
};

const Option: React.FC<OptionProps> = (props) => {
  return (
    <components.Option
      className="dropdown-option"
      {...props}
    ></components.Option>
  );
};

const Control: React.FC<ControlProps> = (props) => {
  return <components.Control className="dropdown-control" {...props} />;
};

const CUSTOM_STYLE: StylesConfig = {
  control: (style) => {
    console.log(style);
    return { ...style, backgroundColor: 'red' };
  },
};
