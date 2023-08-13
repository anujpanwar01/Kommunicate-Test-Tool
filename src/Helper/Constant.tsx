import { LightIcon, MoonIcon } from '../Svgs/Svg';

export const LIGHT_THEME = 0;
export const DARK_THEME = 1;

export const THEME_DROPDOWN = [
  {
    label: <LightIcon />,
    value: LIGHT_THEME,
  },
  {
    label: <MoonIcon />,
    value: DARK_THEME,
  },
];

export interface OptionInterface {
  label: string | React.ReactElement;
  value: string | number | boolean;
}

export interface ThemeInterface {
  theme: number | string | boolean;
}
