import React, { useContext, useEffect } from 'react';
import './App.css';
import ThemeContext from './store/ThemeContext';
import { DARK_THEME } from './Helper/Constant';

const Header = React.lazy(() => import('./components/Header/Header'));

function App() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const body = document.querySelector('body');
    theme.value === DARK_THEME
      ? body?.classList.add('theme-black')
      : body?.classList.remove('theme-black');
  }, [theme]);

  return (
    <React.Suspense fallback={<p>Loading</p>}>
      <Header />
    </React.Suspense>
  );
}

export default App;
