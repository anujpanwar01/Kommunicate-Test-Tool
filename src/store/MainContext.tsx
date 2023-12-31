import React from 'react';
import { DEFAULT_OPTIONS, ENVIRONMENT, EnvInterface } from '../Helper/Constant';
import Kommunicate from '../Script/kmScript';
import Firebase from '../Script/Firebase';
import { useSelector } from 'react-redux';
import { RootState } from './store';

const MainContext = React.createContext<Context>({
  envs: [],
  appId: '',
  runScript: false,
  currentEnv: ENVIRONMENT[0],
  options: '',
  setCurrentEnv: (option) => {},
  setAppId: (value) => {},
  runKmScript: () => {},
  handleRunScript: (bool: boolean) => {},
  updateOptions: (value: string) => {},
  updateEnvs: () => {},
});

export const MainProvider: React.FC<MainType> = ({ children }) => {
  const [envs, setEnvs] = React.useState(ENVIRONMENT);
  const [currentEnv, setCurrentEnv] = React.useState(
    ENVIRONMENT[0] as EnvInterface,
  );
  const [appId, setAppId] = React.useState(currentEnv.appId);
  const [runScript, setRunScript] = React.useState(false);
  const [options, setOptions] = React.useState(DEFAULT_OPTIONS); // need to convert this into string
  const { currentServer } = useSelector((state: RootState) => state.env);

  React.useEffect(() => {
    setAppId(currentEnv.appId);
  }, [currentEnv]);

  const handleRunScript = (bool: boolean) => {
    setRunScript(bool);
  };

  const runKmScript = () => {
    let opt = {
      environment: currentEnv.name,
      popupWidget: true,
      automaticChatOpenOnNavigation: true,
    };

    try {
      opt = { ...opt, ...JSON.parse(options) };
    } catch (error) {
      console.error(error);
    }
    handleRunScript(true);
    Kommunicate.init(appId, opt, currentServer.value);
  };

  const updateOptions = (value: string) => {
    if (value.trim() === '') {
      value = DEFAULT_OPTIONS;
    }

    setOptions(value);
  };

  const updateEnvs = (arry: EnvInterface[]) => {
    setEnvs(arry);
  };

  const value: Context = {
    envs,
    appId,
    currentEnv,
    runScript,
    options,
    setCurrentEnv,
    setAppId,
    runKmScript,
    handleRunScript,
    updateOptions,
    updateEnvs,
  };
  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};

export default MainContext;

type MainType = {
  children?: React.ReactNode;
};

type Context = {
  envs: EnvInterface[];
  appId: string;
  currentEnv: EnvInterface;
  runScript: boolean;
  options: string;
  setCurrentEnv: (option: EnvInterface) => void;
  setAppId: (value: string) => void;
  runKmScript: () => void;
  handleRunScript: (bool: boolean) => void;
  updateOptions: (value: string) => void;
  updateEnvs: (arry: EnvInterface[]) => void;
};
