import { LightIcon, MoonIcon } from '../Svgs/Svg';

export const LIGHT_THEME = 0;
export const DARK_THEME = 1;

export const ENVIRONMENT: EnvInterface[] = [
  {
    name: 'Local',
    appId: '1ec30c318f5f1b55a74c50843d55398fc',
    checked: true,
    id: 0,
    tooltipContent: 'Currently not available!',
  },
  {
    name: 'Test',
    appId: '1ec30c318f5f1b55a74c50843d55398fc',
    checked: false,
    id: 1,
    tooltipContent: 'Currently not available!',
  },
  {
    name: 'Release',
    appId: '1ec30c318f5f1b55a74c50843d55398fc',
    checked: false,
    id: 2,
    tooltipContent: 'Currently not available!',
  },
  {
    name: 'Production',
    appId: 'kommunicate-support',
    checked: false,
    id: 3,
  },
  // {
  //   name: 'Beta',
  //   appId: 'kommunicate-support',
  //   checked: false,
  //   id: 4,
  // },
  // {
  //   name: 'Enterprise',
  //   appId: 'kommunicate-support',
  //   checked: false,
  //   id: 5,
  // },
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

export const SERVER: ServerInterface[] = [
  {
    id: 0,
    label: 'Default region(US)',
    value: 'widget',
  },
  {
    id: 1,
    label: 'India region',
    value: 'widget-in',
  },
  {
    id: 2,
    label: 'Europe region',
    value: 'widget-eu',
  },
  {
    id: 3,
    label: 'Canada region',
    value: 'widget-cn',
  },
];
export interface ServerInterface {
  id: number;
  value: string;
  label: string;
}
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
  id: number | string;
  tooltipContent?: string;
}

export const isBlackTheme = (theme: OptionInterface): string =>
  theme.value === DARK_THEME ? '1' : '0';
