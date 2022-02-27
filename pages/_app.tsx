import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import { CheckWalletProvider } from '../contexts';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CheckWalletProvider>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </CheckWalletProvider>
  );
}

export default MyApp;
