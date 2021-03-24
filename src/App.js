import { Global } from '@emotion/react';
import RouterComponent from './Router';
import { ThemeProvider } from './ThemeContext';
import globalStyle from './GlobalStyles'

function App() {
  return (
    <ThemeProvider>
      <Global styles={globalStyle} /> 
      <RouterComponent/>
      </ThemeProvider>
  );
}

export default App;
