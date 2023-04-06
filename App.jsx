import React from 'react';
import {lightTheme, darkTheme} from './src/config/theme';
import {ThemeProvider} from 'styled-components';
import Routes from './src/config/routes';
import {Provider} from 'react-redux';
import {useSelector} from 'react-redux';
import {store} from './src/redux/store';

const EntryPoint = () => {
  const theme = useSelector(state => state.themeReducer);

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <Routes />
    </ThemeProvider>
  );
};

function App() {
  return (
    <Provider store={store}>
      <EntryPoint />
    </Provider>
  );
}

export default App;
