import { createContext, ReactChild, useEffect, useState } from 'react';

type CheckWalletType = {
  isConnect: boolean;
  currentAccount: string | undefined;
  checkWallet: () => Promise<void>;
  connectWallet: () => Promise<void>;
};

export const CheckWalletContext = createContext({} as CheckWalletType);

const CheckWalletProvider = ({
  children,
}: {
  children: ReactChild | ReactChild[];
}) => {
  const [isConnect, setIsConnect] = useState(false);
  const [currentAccount, setCurrentAccount] = useState(undefined);

  const checkWallet = async () => {
    try {
      // @ts-ignore
      const { ethereum } = window;

      ethereum ? setIsConnect(true) : setIsConnect(false);

      const accounts = await ethereum.request({
        method: 'eth_accounts',
      });

      if (accounts.length !== 0) {
        const account = accounts[0];
        return setCurrentAccount(account);
      }
    } catch (err) {
      console.log(err);
      setIsConnect(false);
    }
  };

  const connectWallet = async () => {
    try {
      // @ts-ignore
      const { ethereum } = window;

      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });

      setCurrentAccount(accounts[0]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CheckWalletContext.Provider
      value={{ isConnect, currentAccount, checkWallet, connectWallet }}
    >
      {children}
    </CheckWalletContext.Provider>
  );
};

export { CheckWalletProvider };
