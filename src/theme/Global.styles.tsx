import React from 'react';
import { Global, css } from '@emotion/react';
import theme from './theme.constant';

const GlobalStyle: React.FunctionComponent = () => (
  <Global
    styles={css`
      body {
        font-family: ${theme.fonts.sansSerif};
        font-size: ${theme.fontSizes[2]}px;
        line-height: ${theme.lineHeights.title};
        margin: 0px;
      }
      main {
        max-width: 1440px;
        margin-left: auto;
        margin-right: auto;
      }
    `}
  />
);

export default GlobalStyle;
