import { Button, Text } from '@nextui-org/react';
import { useContext, useEffect, useState } from 'react';
import { MetamaskIcon } from '../..';
import { CheckWalletContext } from '../../../contexts';

const ConnectButton = () => {
  const { isConnect, currentAccount, checkWallet, connectWallet } =
    useContext(CheckWalletContext);

  const renderButton = () => {
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
