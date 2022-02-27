import { Avatar, Button, Card, Text } from '@nextui-org/react';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';

import styles from './Publication.module.css';

const Publication = () => {
  const [starred, setStarred] = useState(true);

  return (
    <section className={styles.wrapper}>
      <Card hoverable>
        <Card.Header className={styles.card__header}>
          <div className={styles.card__header__imgName}>
            <Avatar
              squared
              size={'lg'}
              icon={<FaUser size={20} color={'gray'} />}
            />
            <Text h4>Star Project</Text>
          </div>

          {starred ? (
            <AiFillStar
              size={27}
              color={'#f5a623'}
              className={styles.card__header__star}
            />
          ) : (
            <AiOutlineStar
              size={27}
              color={'#f5a623'}
              className={styles.card__header__star}
            />
          )}
        </Card.Header>
        <Card.Body>
          <Text>
            This project was build with{' '}
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
            and{' '}
            <Link href={'https://hardhat.org/'}>
              <a target={'_blank'} className={styles.card__body__link}>
                Hardhat
              </a>
            </Link>
            . If you liked it, consider giving it a star.
          </Text>
        </Card.Body>
        <Card.Footer>
          <Text>
            <strong>10</strong> stars
          </Text>
        </Card.Footer>
      </Card>
    </section>
  );
};

export { Publication };
