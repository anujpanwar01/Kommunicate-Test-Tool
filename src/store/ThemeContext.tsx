import React from 'react';
import { useState } from 'react';
import { OptionInterface, THEME_DROPDOWN } from '../Helper/Constant';

const ThemeContext = React.createContext<Context>({
  theme: THEME_DROPDOWN[0],
  onChangeHandler: (option) => {},
});

export const ThemProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState(THEME_DROPDOWN[0] as OptionInterface);

  const onChangeHandler = (option: OptionInterface | null) => {
    if (option === null) return;
    setTheme(option);
  };

  return (
    <ThemeContext.Provider value={{ theme, onChangeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;

interface Context {
  theme: OptionInterface;
  onChangeHandler: (option: OptionInterface | null) => void;
}
