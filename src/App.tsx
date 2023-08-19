import React, { useContext, useEffect } from 'react';
import './App.css';
import ThemeContext from './store/ThemeContext';
import { DARK_THEME } from './Helper/Constant';
import LocalStorage from './LocalStorage/LocalStorage';
import MainContext from './store/MainContext';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routers from './router';
const Header = React.lazy(() => import('./components/Header/Header'));
const router = createBrowserRouter(routers);

const App: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const { setCurrentEnv, updateEnvs, envs } = useContext(MainContext);

  useEffect(() => {
    const parsedObj = LocalStorage.getItem('currentEnv');
    const envList = LocalStorage.getItem('envList');
    if (parsedObj) {
      setCurrentEnv(parsedObj);
    }
    if (envList) {
      updateEnvs(envList);
    }
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
