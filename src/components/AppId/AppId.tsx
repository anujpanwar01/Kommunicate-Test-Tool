import React from 'react';
import { toast } from 'react-toastify';
import { AppIdContainer } from './AppId.style';
import Input from '../Input/Input';
import MainContext from '../../store/MainContext';
import Kommunicate from '../../Script/kmScript';
import LocalStorage from '../../LocalStorage/LocalStorage';
import { EnvInterface } from '../../Helper/Constant';
import Button from '../Button/Button';
import { appWindow } from '../../Script/type';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

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
  const { currentServer } = useSelector((state: RootState) => state.env);
  const [loading, setLoading] = React.useState(false);
  const loadingRef = React.useRef(loading);

  const validationHandler = () => {
    const isDisabled = currentServer.id !== 0 && currentEnv.id !== 3; // 0 default server Us region, 3 production env
    return {
      isDisabled,
      infoLabel: `${currentEnv.name} environment is not supported in ${currentServer.label}`,
    };
  };

  const isKmScriptLoaded = () => {
    const isLocal = currentEnv.id === 0;

    const errorMsg = isLocal
      ? 'Either your local is not running or your code is compiling'
      : 'Not able to load your widget please check your appId';

    setLoading(true);
    loadingRef.current = true;

    const intervalId = setInterval(() => {
      if (appWindow.Kommunicate) {
        setLoading(false);
        loadingRef.current = false;
        console.info('Widget loaded successfully');
        toast.success('Widget loaded successfully', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        clearInterval(intervalId);
      }
    }, 1000);

    if (loadingRef.current) {
      const timeId = setTimeout(() => {
        clearTimeout(timeId);
        if (loadingRef.current === false) return;
        toast.error(errorMsg, {
          position: 'top-right',
          autoClose: 6000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setLoading(false);
        clearInterval(intervalId);
        document.querySelector('.kommunicate-custom-iframe')?.remove();
        document.querySelector('#km-fullscreen-image-modal')?.remove();
        handleRunScript(false);
        console.info(
          'Not able to load your Kommunicate widget please check you appId',
        );
      }, 10000);
    }
  };

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
    const { isDisabled, infoLabel } = validationHandler();
    if (isDisabled) {
      toast.info(infoLabel, {
        position: 'top-right',
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }
    if (e.key === 'Enter') {
      // run script
      runKmScript();
    }
  };

  const onClickHandler = () => {
    const { isDisabled, infoLabel } = validationHandler();
    if (isDisabled) {
      toast.info(infoLabel, {
        position: 'top-right',
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }
    if (!runScript) {
      isKmScriptLoaded();
      runKmScript();
      return;
    }

    Kommunicate.logout();
    handleRunScript(false);
  };

  const btnText = !runScript ? 'Run Script' : 'Logout';

  return (
    <AppIdContainer>
      <Input type="text" onChange={onChangeHandler} value={appId} />
      <Button
        onKeyDown={loading ? () => {} : onKeyPress}
        onClick={loading ? () => {} : onClickHandler}
      >
        {loading ? 'Loading...' : btnText}
      </Button>
    </AppIdContainer>
  );
};
export default AppId;
