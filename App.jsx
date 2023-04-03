import React, { useEffect, useState } from 'react';
import {lightTheme, darkTheme} from './src/config/theme';
import {ThemeProvider} from 'styled-components';
import Routes from './src/config/routes';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import themeReducer from './src/redux/themeReducer';
import {useSelector} from 'react-redux';

const store = createStore(themeReducer);

const EntryPoint = () => {
  const theme = useSelector(state => state);

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <Routes/>
    </ThemeProvider>
  )
};


function App() {

  return (
      <Provider store={store}>
        <EntryPoint/>
      </Provider>
  );
}

export default App;
