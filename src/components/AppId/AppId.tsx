import React from 'react';
import { AppIdContainer } from './AppId.style';
import Input from '../Input/Input';
import MainContext from '../../store/MainContext';
import Kommunicate from '../../Script/kmScript';

const AppId = () => {
  const { appId, runScript, setAppId, runKmScript, handleRunScript } =
    React.useContext(MainContext);

  const onChangeHandler = (e: { target: { value: string } }) => {
    const { value } = e.target;
    setAppId(value);
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
      <button onKeyDown={onKeyPress} onClick={onClickHandler}>
        {!runScript ? 'Run Script' : 'Logout'}
      </button>
    </AppIdContainer>
  );
};
export default AppId;
