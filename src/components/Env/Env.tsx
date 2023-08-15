import React from 'react';
import { MainContainer } from './Env.style';
import { ENVIRONMENT, EnvInterface } from '../../Helper/Constant';
import MainContext from '../../store/MainContext';

const Env: React.FC = () => {
  const { currentEnv, setCurrentEnv } = React.useContext(MainContext);

  const onChangeHandler = (option: EnvInterface) => setCurrentEnv(option);

  return (
    <MainContainer>
      {ENVIRONMENT.map((ele, i) => {
        return (
          <label htmlFor={ele.name.toLowerCase()} key={ele.name}>
            <input
              id={ele.name.toLowerCase()}
              type="radio"
              name="select-env"
              onChange={(e) => onChangeHandler(ele)}
              checked={currentEnv.name === ele.name}
            />
            <p>{ele.name}</p>
          </label>
        );
      })}
    </MainContainer>
  );
};
export default Env;
