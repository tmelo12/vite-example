import React from 'react';
import { GlobalStyle } from './styles/global';
import NonAuthRoutes from './routes/NonAuthRoutes';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme'

export const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <NonAuthRoutes />
      </ThemeProvider>
    </>
  )
};
