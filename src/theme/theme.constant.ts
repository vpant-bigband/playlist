const theme = {
  breakpoints: ['576px', '767px', '992px', '1200px'],
  BREAKPOINTS: [576, 767, 992, 1200],
  space: [0, 4, 8, 16, 24, 32, 64, 128, 256, 512],
  fontSizes: [10, 12, 14, 16, 18, 20, 24, 36, 48, 80, 96],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5,
  },
  fonts: {
    serif: 'athelas, georgia, times, serif',
    sansSerif: '"Roboto", sans-serif',
    montserrat: 'Montserrat',
  },
  borders: [0, '1px solid', '2px solid', '4px solid', '8px solid', '16px solid', '32px solid'],
  width: [16, 24, 32, 64, 128, 256],
  heights: [16, 24, 32, 64, 128, 256],
  maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  colors: {
    // Copy Typography
    blue: '#0E5AA7',
    darkBlue: '#0a437c',
    purple: '#6F1C60',
    lightBlue: '#b7cee5',
    deepRed: '#8A0C0C',
    // Greys
    ashGray: '#F9F7F7',
    lightGray: '#EAEAEA',
    darkGray: '#2D2D2D',

    white: '#fff',
    transparent: 'transparent',
    black: '#000',
    // Notification color
    error: '#FEF4F4',
    warning: '#FCF6E7',
    information: '#ECF3FA',
    success: '#F1FAF9',
  },
};

export type ThemeType = typeof theme;

export default theme;