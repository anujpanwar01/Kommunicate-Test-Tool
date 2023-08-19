import React from 'react';
import { AppIdContainer } from './AppId.style';
import Input from '../Input/Input';
import MainContext from '../../store/MainContext';
import Kommunicate from '../../Script/kmScript';
import LocalStorage from '../../LocalStorage/LocalStorage';
import { EnvInterface } from '../../Helper/Constant';
import Button from '../Button/Button';

const AppId = () => {
  const {
    envs,
    currentEnv,
    appId,
    runScript,
    setAppId,
    runKmScript,
    handleRunScript,
    setCurrentEnv,
    updateEnvs,
  } = React.useContext(MainContext);

  const handleLocalStorage = (env: EnvInterface, envArr: EnvInterface[]) => {
    if (!env) return;
    const parsedObj = LocalStorage.getItem('currentEnv');

    const newObj = LocalStorage.stringify({ ...parsedObj, ...env });
    const envListStr = LocalStorage.stringify(envArr);
    const id = setTimeout(() => {
      LocalStorage.setItem('currentEnv', newObj);
      LocalStorage.setItem('envList', envListStr);
      clearTimeout(id);
    }, 1000);
  };

  const onChangeHandler = (e: { target: { value: string } }) => {
    const { value } = e.target;
    const setNewEnv = { ...currentEnv, appId: value };
    setAppId(value);
    setCurrentEnv(setNewEnv);
    const envArr = envs.map((env) => {
      if (env.name === currentEnv.name) {
        env.appId = value;
      }
      return env;
    });
    handleLocalStorage(setNewEnv, envArr);
    updateEnvs(envArr);
  };

  const onKeyPress = (e: { key: number | string }) => {
    if (e.key === 'Enter') {
      // run script
      runKmScript();
    }
  };

  const onClickHandler = () => {
    if (!runScript) {
      runKmScript();
      return;
    }

    Kommunicate.logout();
    handleRunScript();
  };

  return (
    <AppIdContainer>
      <Input type="text" onChange={onChangeHandler} value={appId} />
      <Button onKeyDown={onKeyPress} onClick={onClickHandler}>
        {!runScript ? 'Run Script' : 'Logout'}
      </Button>
    </AppIdContainer>
  );
};
export default AppId;
