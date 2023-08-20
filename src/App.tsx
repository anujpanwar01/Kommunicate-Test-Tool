import React, { useContext, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import ThemeContext from './store/ThemeContext';
import { DARK_THEME, SERVER, THEME_DROPDOWN } from './Helper/Constant';
import LocalStorage from './LocalStorage/LocalStorage';
import MainContext from './store/MainContext';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routers from './router';
import { useDispatch } from 'react-redux';
import { setCurrentServer } from './store/Env.Slice';

const Header = React.lazy(() => import('./components/Header/Header'));
const router = createBrowserRouter(routers);

const App: React.FC = () => {
  const { theme, onChangeHandler: setTheme } = useContext(ThemeContext);
  const { setCurrentEnv, updateEnvs } = useContext(MainContext);
  const dispatch = useDispatch();

  useEffect(() => {
    const parsedObj = LocalStorage.getItem('currentEnv');
    const envList = LocalStorage.getItem('envList');
    const theme = LocalStorage.getItem('theme');
    const currentServer = LocalStorage.getItem('currentServer');

    parsedObj && setCurrentEnv(parsedObj);
    envList && updateEnvs(envList);
    theme &&
      setTheme(
        THEME_DROPDOWN.find((ele) => ele.value === theme.value) ||
          THEME_DROPDOWN[0],
      );
    dispatch(setCurrentServer(currentServer || SERVER[0]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // addData({ test: 'kommunicate-support' });
    const body = document.querySelector('body');
    theme.value === DARK_THEME
      ? body?.classList.add('theme-black')
      : body?.classList.remove('theme-black');
  }, [theme]);

  return (
    <React.Suspense fallback={<p>Loading</p>}>
      <Header />
      <RouterProvider router={router} fallbackElement={<p>loading..</p>} />
      <ToastContainer />
    </React.Suspense>
  );
};

export default App;

declare global {
  interface Window {
    LocalStorage: any;
  }
}

window.LocalStorage = LocalStorage || {};
