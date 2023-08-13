import React from 'react';
import Select from 'react-select';
import { OptionInterface } from '../../Helper/Constant';

const Dropdown: React.FC<{
  defaultValue: OptionInterface;
  options: OptionInterface[];
  onChangeHandler: (option: OptionInterface | null) => void;
}> = ({ defaultValue, options, onChangeHandler }) => {
  return (
    <Select
      defaultValue={defaultValue}
      onChange={(option) => {
        onChangeHandler(option as OptionInterface | null);
      }}
      options={options}
    />
  );
};

export default Dropdown;
