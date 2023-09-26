import React from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { MainContainer } from './Env.style';
import {
  EnvInterface,
  SERVER,
  ServerInterface,
  isBlackTheme,
} from '../../Helper/Constant';
import MainContext from '../../store/MainContext';
import LocalStorage from '../../LocalStorage/LocalStorage';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Dropdown from '../Dropdown/Dropdown';
import { setCurrentServer } from '../../store/Env.Slice';
import ThemeContext from '../../store/ThemeContext';

const Env: React.FC = () => {
  const { theme } = React.useContext(ThemeContext);
  const { envs, setCurrentEnv, updateEnvs } = React.useContext(MainContext);
  const { currentServer } = useSelector((state: RootState) => state.env);
  const dispatch = useDispatch();
  const blackTheme = isBlackTheme(theme);

  const onChangeHandler = (option: EnvInterface, index: number) => {
    const opt = { ...option, checked: true };
    const envsCopy = envs.map((env) => {
      if (env.name !== opt.name) {
        env.checked = false;
      } else {
        env.checked = true;
      }
      return env;
    });

    LocalStorage.setItem('currentEnv', LocalStorage.stringify(opt));
    LocalStorage.setItem('envList', LocalStorage.stringify(envsCopy));
    setCurrentEnv(opt);
    updateEnvs(envsCopy);
  };

  const dropdownChangeHandler = (option: unknown) => {
    if (option === null) return;
    const selectedOption = option as ServerInterface;
    LocalStorage.setItem('currentServer', JSON.stringify(selectedOption));
    dispatch(setCurrentServer(selectedOption));
  };

  return (
    <MainContainer>
      {envs.map((ele, i) => {
        const disabled = currentServer.id !== 0 && ele.id !== 3;
        const id = `disable-label-${ele.name.toLowerCase()}`;

        return (
          <label
            id={disabled ? id : ''}
            className={
              (disabled ? 'disable-label' : '') + ' ' + ele.name.toLowerCase()
            }
            htmlFor={ele.name.toLowerCase()}
            key={ele.name}
            data-tooltip-id={id}
            data-tooltip-content={disabled ? ele.tooltipContent : ''}
            data-tooltip-place="top"
          >
            <input
              id={ele.name.toLowerCase()}
              type="radio"
              name="select-env"
              onChange={(e) => {
                onChangeHandler(ele, i);
              }}
              disabled={disabled} // production env
              checked={ele.checked}
            />
            <p>{ele.name}</p>
            {disabled ? (
              <ReactTooltip
                className={`env-${
                  +blackTheme ? 'dark' : 'white'
                }-theme-tooltip`}
                place="top"
                id={id}
              />
            ) : null}
          </label>
        );
      })}
      <div className="dropdown-container">
        {' '}
        <Dropdown
          className="env-dropdown"
          options={SERVER}
          defaultValue={currentServer}
          onChange={dropdownChangeHandler}
          customStyle={{
            controlBg: +blackTheme ? '#373e47' : 'whitesmoke',
            menuBg: +blackTheme ? '#373e47' : 'whitesmoke',
          }}
        />
      </div>
    </MainContainer>
  );
};
export default Env;
