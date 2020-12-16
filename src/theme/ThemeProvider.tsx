import React from 'react';
import { ThemeProvider } from '@emotion/react';
import ThemeConstant, { ThemeType } from './theme.constant';
import GlobalStyle from './Global.styles';

interface ThemeProps {
  children: React.ReactChildren | React.ReactElement | React.ReactElement[];
};

const Theme: React.FunctionComponent<ThemeProps> = ({ children }) => {
  return (
    <ThemeProvider theme={ThemeConstant as ThemeType}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}



export default Theme;