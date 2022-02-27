import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import { CheckWalletProvider } from '../contexts';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // @ts-ignore
    const { ethereum } = window;

    if (!ethereum) return;

    ethereum.on('accountsChanged', async () => {
      const accounts = await ethereum.request({
        method: 'eth_accounts',
      });

      if (accounts.length === 0) {
        location.reload();
      }
    });
  }, []);

  return (
    <CheckWalletProvider>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </CheckWalletProvider>
  );
}

export default MyApp;
