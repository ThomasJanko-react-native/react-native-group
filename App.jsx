import React, {useEffect} from 'react';
import {theme} from './src/config/theme';
import {ThemeProvider} from 'styled-components';
import Routes from './src/config/routes';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './src/redux/reducer';

const store = createStore(reducer);

function App() {
  return (
      <Provider store={store}>
      <ThemeProvider theme={theme}>
          <Routes/>
      </ThemeProvider>
      </Provider>
  );
}

export default App;
