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

  const onChangeHandler = (option: unknown) => {
    if (option === null) return;
    const selectedOption = option as OptionInterface;
    setTheme(selectedOption);
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
  onChangeHandler: (option: unknown) => void;
}
