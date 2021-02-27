import { ThemeProvider } from 'styled-components'
import {lightTheme, GlobalStyle } from '../src/theme';
import Head from 'next/head';

export default function App({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>Instalura</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
