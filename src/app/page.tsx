import { ThemeProvider } from "@mui/material";
import { WauMaus } from "./app/waumaus";
import { theme } from './theme'

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <WauMaus />
    </ThemeProvider>
  );
}
