import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#0BB0A1',
      light: '#0FE6D4',
      dark: '#0BAD9F',
    },
    secondary: {
      main: '#9C5992',
      light: '#AD71A4',
      dark: '#8E5285',
    },
    background: {
      // default: '#f0f0f0',
      default: '#F2ECCC',
    },
  },
  typography: {
    h1: {
      fontFamily: '"rl-aqva", sans-serif',
    },
    h2: {
      fontFamily: '"rl-aqva", sans-serif',
      fontSize: '3rem',
      fontWeight: 400,
    },
    h3: {
      fontFamily: '"rl-aqva", sans-serif',
      fontSize: '2.5rem',
      fontWeight: 400,
    },
    h4: {
      fontFamily: '"proxima-nova-condensed", sans-serif',
      fontWeight: 400,
    },
    h5: {
      fontFamily: '"rl-aqva", sans-serif',
      fontSize: '2rem',
      fontWeight: 400,
    },
    h6: {
      fontFamily: '"rl-aqva", sans-serif',
      fontSize: '1.5rem',
      fontWeight: 400,
    },
    body1: {
      fontFamily: '"proxima-nova-condensed", sans-serif',
      fontWeight: 400,
      fontSize: '1.5rem',
    },
    button: {
      fontFamily: '"proxima-nova-condensed", sans-serif',
      fontWeight: 400,
      fontSize: '1rem',
    },
  },
  shape: {
    borderRadius: 8,
  },
});
