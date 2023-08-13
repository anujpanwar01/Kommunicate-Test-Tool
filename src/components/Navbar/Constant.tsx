import React from 'react';
import {
  GithubIcon,
  Linkedin,
  NetlifyIcon,
  StackOverflowIcon,
} from '../../Svgs/Svg';

export const NavItems: NavInterface[] = [
  {
    icon: <Linkedin />,
    title: 'Linkedin',
    url: 'https://www.linkedin.com/in/anuj-panwar-a1390a229/',
  },
  {
    icon: <GithubIcon />,
    title: 'Github',
    url: 'https://github.com/anujpanwar01',
  },
  {
    icon: <StackOverflowIcon />,
    title: 'stack overflow',
    url: 'https://stackoverflow.com/users/17752587/anuj-panwar',
  },
  {
    icon: <NetlifyIcon />,
    title: 'Portfolio',
    url: 'https://anujpanwar.netlify.app/',
  },
];

interface NavInterface {
  icon: React.ReactElement;
  title: string;
  url: string;
}
