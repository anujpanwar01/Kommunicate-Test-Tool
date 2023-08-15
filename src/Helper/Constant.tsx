import { LightIcon, MoonIcon } from '../Svgs/Svg';

export const LIGHT_THEME = 0;
export const DARK_THEME = 1;

export const ENVIRONMENT: EnvInterface[] = [
  {
    name: 'Local',
    appId: '1ec30c318f5f1b55a74c50843d55398fc',
  },
  {
    name: 'Test',
    appId: '1ec30c318f5f1b55a74c50843d55398fc',
  },
  {
    name: 'Release',
    appId: '1ec30c318f5f1b55a74c50843d55398fc',
  },
  {
    name: 'Production',
    appId: 'kommunicate-support',
  },
];

export const DEFAULT_OPTIONS = `{
  "popupWidget": true,
  "automaticChatOpenOnNavigation": true
}`;
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

export interface EnvInterface {
  appId: string;
  name: string;
  checked?: boolean;
}
