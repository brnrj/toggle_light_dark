import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import Toggle from './components/Toggle';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme} type="button">
          Toggle theme
        </Toggle>
        <h1>It`s a {theme === 'light' ? 'light theme' : 'dark theme'}!</h1>
        <footer>
          <span>Credits:</span>
          {' '}
          <small>
            <b>Sun</b> icon made by{' '}
            <a href="https://www.flaticon.com/authors/smalllikeart">
              smalllikeart
            </a>{' '}
            from <a href="https://www.flaticon.com">www.flaticon.com</a>
          </small>
          {' '}
          <small>
            <b>Moon</b> icon made by{' '}
            <a href="https://www.freepik.com/home">Freepik</a> from{' '}
            <a href="https://www.flaticon.com">www.flaticon.com</a>
          </small>
        </footer>
      </>
    </ThemeProvider>
  );
}

export default App;
