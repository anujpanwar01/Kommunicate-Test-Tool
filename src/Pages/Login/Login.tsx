import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input/Input';
import { LoginContainer } from './Login.style';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { inputChange } from '../../store/Login.Slice';
import Button from '../../components/Button/Button';

const Login = () => {
  const { value } = useSelector((state: RootState) => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleKeyDown = (event: { key: number | string }) => {
    if (event.key === 'Enter') {
      navigate('/');
    }
  };

  const handleOnChange = (e: { target: { value: string | number } }) => {
    const { value } = e.target;
    dispatch(inputChange(value));
  };

  const handleOnClick = () => navigate('/');

  return (
    <LoginContainer>
      <Input
        type="text"
        value={value}
        onKeyDown={handleKeyDown}
        onChange={handleOnChange}
        placeholder="Unique id/name -: Thor, Home lander"
      />
      <Button onClick={handleOnClick}>Enter your editor</Button>
    </LoginContainer>
  );
};
export default Login;
