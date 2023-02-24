import type { AppProps } from 'next/app'
import '../styles/global.css';
import {createTheme, ThemeProvider} from "@mui/material/styles";

export default function App({ Component, pageProps }: AppProps) {
  // All the default theme overrides
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
