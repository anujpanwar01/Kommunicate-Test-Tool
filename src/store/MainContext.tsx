import React from 'react';
import { DEFAULT_OPTIONS, ENVIRONMENT, EnvInterface } from '../Helper/Constant';
import Kommunicate from '../Script/kmScript';

const MainContext = React.createContext<Context>({
  appId: '',
  runScript: false,
  currentEnv: ENVIRONMENT[0],
  options: '',
  setCurrentEnv: (option) => {},
  setAppId: (value) => {},
  runKmScript: () => {},
  handleRunScript: () => {},
  updateOptions: (value: string) => {},
});

export const MainProvider: React.FC<MainType> = ({ children }) => {
  const [currentEnv, setCurrentEnv] = React.useState(
    ENVIRONMENT[0] as EnvInterface,
  );
  const [appId, setAppId] = React.useState(currentEnv.appId);
  const [runScript, setRunScript] = React.useState(false);
  const [options, setOptions] = React.useState(DEFAULT_OPTIONS); // need to convert this into string

  //   React.useEffect(() => {
  //     setOptions(DEFAULT_OPTIONS);
  //   }, []);

  const handleRunScript = () => setRunScript(!runScript);

  const runKmScript = () => {
    handleRunScript();
    Kommunicate.init(appId, JSON.parse(options));
  };

  const updateOptions = (value: string) => {
    setOptions(value);
  };

  const value: Context = {
    appId,
    currentEnv,
    runScript,
    options,
    setCurrentEnv,
    setAppId,
    runKmScript,
    handleRunScript,
    updateOptions,
  };
  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};

export default MainContext;

type MainType = {
  children?: React.ReactNode;
};

type Context = {
  appId: string;
  currentEnv: EnvInterface;
  runScript: boolean;
  options: string;
  setCurrentEnv: (option: EnvInterface) => void;
  setAppId: (value: string) => void;
  runKmScript: () => void;
  handleRunScript: () => void;
  updateOptions: (value: string) => void;
};

type Options = {
  [key: string]: any;
};
