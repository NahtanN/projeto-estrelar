import { useEffect, useState } from 'react';
import { ConnectButton } from '..';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.container}>
      <h1>Projeto Estrelar</h1>
      <ConnectButton />
    </header>
  );
};

export { Header };
