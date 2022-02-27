import { Avatar, Button, Card, Text } from '@nextui-org/react';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import { cardData, CardDataType } from '../../services/cardData';
import Links from './Links';
import styles from './Publication.module.css';

const Publication = ({ cardData }: { cardData: CardDataType }) => {
  const [starred, setStarred] = useState(true);
  const bodyText = cardData.description.split('<links>');

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
            <Text h4>{cardData.title}</Text>
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
          <Text key={cardData.title}>
            {bodyText[0]}
            <Links lang={cardData.lang} />
            {bodyText[1]}
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
