import React from 'react';
import {lightTheme, darkTheme} from './src/config/theme';
import {ThemeProvider} from 'styled-components';
import Routes from './src/config/routes';
import {Provider, useSelector} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store';
import {Text} from 'react-native';

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
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <EntryPoint />
      </PersistGate>
    </Provider>
  );
}

export default App;
