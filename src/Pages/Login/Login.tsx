import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
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

  const validation = () => {
    const valid = value.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
    if (!valid) {
      toast.error('Please provide the valid email', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
    return valid;
  };
  const handleKeyDown = (event: { key: number | string }) => {
    if (event.key === 'Enter') {
      const inValid = validation();
      if (!inValid) return;
      navigate('/');
    }
  };

  const handleOnChange = (e: { target: { value: string } }) => {
    const { value } = e.target;
    dispatch(inputChange(value));
  };

  const handleOnClick = () => {
    const inValid = validation();
    if (!inValid) return;

    navigate('/');
  };

  return (
    <LoginContainer>
      <Input
        type="email"
        value={value}
        onKeyDown={handleKeyDown}
        onChange={handleOnChange}
        placeholder="email -: abc@gmail.com"
      />
      <Button onClick={handleOnClick}>Enter your editor</Button>
    </LoginContainer>
  );
};
export default Login;
