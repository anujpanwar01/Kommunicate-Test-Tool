import React from 'react';
import { MainContainer } from './Env.style';
import { EnvInterface } from '../../Helper/Constant';
import MainContext from '../../store/MainContext';
import LocalStorage from '../../LocalStorage/LocalStorage';

const Env: React.FC = () => {
  const { envs, setCurrentEnv, updateEnvs } = React.useContext(MainContext);

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

  return (
    <MainContainer>
      {envs.map((ele, i) => {
        return (
          <label htmlFor={ele.name.toLowerCase()} key={ele.name}>
            <input
              id={ele.name.toLowerCase()}
              type="radio"
              name="select-env"
              onChange={(e) => {
                onChangeHandler(ele, i);
              }}
              checked={ele.checked}
            />
            <p>{ele.name}</p>
          </label>
        );
      })}
    </MainContainer>
  );
};
export default Env;
