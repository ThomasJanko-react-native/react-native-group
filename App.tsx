import React, { useEffect } from 'react';
import { theme } from './src/config/theme'
import { ThemeProvider } from 'styled-components';
import Routes from './src/config/routes';


function App() {
 
  return (
    <ThemeProvider theme={theme}> {/**un commentaire */}
        <Routes/>
    </ThemeProvider>
  );
}

export default App;
