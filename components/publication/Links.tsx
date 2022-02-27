import Link from 'next/link';
import { useEffect, useState } from 'react';

import styles from './Publication.module.css';

const Links = ({ lang }: { lang: string }) => {
  const [andEY, setAndEY] = useState('and');

  useEffect(() => {
    if (lang === 'en') {
      setAndEY('and');
    } else if (lang === 'pt-br') {
      setAndEY('e');
    } else if (lang === 'es') {
      setAndEY('y');
    }
  }, []);

  return (
    <>
      <Link href={'https://nextjs.org/'}>
        <a target={'_blank'} className={styles.card__body__link}>
          NextJs
        </a>
      </Link>
      ,{' '}
      <Link href={'https://nextui.org/'}>
        <a target={'_blank'} className={styles.card__body__link}>
          NextUI
        </a>
      </Link>
      ,{' '}
      <Link href={'https://soliditylang.org/'}>
        <a target={'_blank'} className={styles.card__body__link}>
          Solidiy
        </a>
      </Link>{' '}
      {andEY}{' '}
      <Link href={'https://hardhat.org/'}>
        <a target={'_blank'} className={styles.card__body__link}>
          Hardhat
        </a>
      </Link>
    </>
  );
};

export default Links;
