import { ethers } from 'ethers';
import { createContext, ReactChild, useState } from 'react';

type CheckWalletType = {
  isConnect: boolean;
  currentAccount: string | undefined;
  checkWallet: () => Promise<void>;
  connectWallet: () => Promise<void>;
  getSigner: () => Promise<
    | ethers.providers.JsonRpcProvider
    | ethers.providers.JsonRpcSigner
    | undefined
  >;
  connectContract: (
    contractAddress: string,
    abi: ethers.ContractInterface
  ) => Promise<ethers.Contract>;
};

export const CheckWalletContext = createContext({} as CheckWalletType);

const CheckWalletProvider = ({
  children,
}: {
  children: ReactChild | ReactChild[];
}) => {
  const [isConnect, setIsConnect] = useState(false);
  const [currentAccount, setCurrentAccount] = useState();

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

  const getSigner = async () => {
    try {
      // @ts-ignore
      const { ethereum } = window;

      if (!ethereum || !currentAccount) {
        const provider = new ethers.providers.JsonRpcProvider(process.env.RCP);

        return provider;
      } else if (ethereum && currentAccount) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();

        return signer;
      } else {
        console.log('Log in into metamask');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const connectContract = async (
    contractAddress: string,
    abi: ethers.ContractInterface
  ) => {
    let signer = await getSigner();

    const contract = new ethers.Contract(contractAddress, abi, signer);

    return contract;
  };

  return (
    <CheckWalletContext.Provider
      value={{
        isConnect,
        currentAccount,
        checkWallet,
        connectWallet,
        getSigner,
        connectContract,
      }}
    >
      {children}
    </CheckWalletContext.Provider>
  );
};

export { CheckWalletProvider };
