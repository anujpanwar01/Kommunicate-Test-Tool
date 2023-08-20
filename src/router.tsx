import { redirect } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Error from './Pages/Error/Error';
import Main from './Pages/Main/Main';

const rootLoader = () => {
  if (false) {
    throw redirect('/login');
  }
  return 'I am Root';
};

const routerArr = [
  {
    path: 'login',
    element: <Login />,
    errorElement: <Error />,
  },
];

const homeRoutes = ['/', 'dashboard', 'home'].map((route) => ({
  path: route,
  element: <Main />,
  errorElement: <Error />,
  loader: rootLoader,
}));

routerArr.unshift(...homeRoutes);

export default routerArr;
