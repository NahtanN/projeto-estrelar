import { Button, Text } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { MetamaskIcon } from '../..';

const ConnectButton = () => {
  const [isConnect, setIsConnect] = useState(false);
  const [currentAccount, setCurrentAccount] = useState('');

  const checkWallet = async () => {
    try {
      // @ts-ignore
      const { ethereum } = window;

      ethereum ? setIsConnect(true) : setIsConnect(false);

      const accounts = await ethereum.request({
        method: 'eth_accounts',
      });

      if (accounts.lenght !== 0) {
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

  const renderButton = () => {
    console.log(currentAccount);

    if (isConnect && currentAccount !== undefined) {
      return (
        <Button clickable={false}>
          <Text
            color="white"
            css={{
              maxWidth: '12rem',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {currentAccount}
          </Text>
        </Button>
      );
    } else if (isConnect) {
      return (
        <Button icon={<MetamaskIcon />} onClick={connectWallet}>
          Connect Wallet
        </Button>
      );
    } else {
      return (
        <Button
          disabled
          style={{
            cursor: 'pointer',
          }}
        >
          <a href="https://metamask.io/" target={'_blank'} rel="noreferrer">
            Log in into Metamask
          </a>
        </Button>
      );
    }
  };

  useEffect(() => {
    checkWallet();
  }, []);

  return <>{renderButton()}</>;
};

export { ConnectButton };
