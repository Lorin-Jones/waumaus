'use client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { WauMaus } from './waumaus';
import { theme } from './theme';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <WauMaus />
    </ThemeProvider>
  );
}
