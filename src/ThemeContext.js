import React, {createContext} from 'react';

import {ThemeProvider as EmotionThemeProvider} from '@emotion/react';
import { theme } from './theme';

export const EmotionContext = createContext();

export const ThemeProvider =({children})=>{
    return(
      <EmotionThemeProvider theme={theme}>
          {children}
      </EmotionThemeProvider>
    )
}