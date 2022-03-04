import {
  Avatar,
  Button,
  Card,
  Input,
  Loading,
  Modal,
  Text,
  Textarea,
  Tooltip,
} from '@nextui-org/react';
import { ethers, Contract } from 'ethers';
import { useContext, useEffect, useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import { CheckWalletContext } from '../../contexts';
import { enStarProject } from '../../services';
import { CardDataType } from '../../services/cardData';
import Links from './Links';
import styles from './Publication.module.css';

const Publication = ({ cardData }: { cardData: CardDataType }) => {
  const { currentAccount, getSigner } = useContext(CheckWalletContext);
  const [starred, setStarred] = useState(false);
  const [stars, setStars] = useState(0);
  const [addStarVisible, setAddStarVisible] = useState(false);
  const [removeStarVisible, setRemoveStarVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [addStarLoading, setAddStarLoading] = useState(false);

  const bodyText = cardData.description.split('<links>');

  const handleClickOpenOutlineStar = () => {
    setAddStarVisible(true);
  };
  const handleClickCloseOutlineStar = () => setAddStarVisible(false);
  const sendStar = async () => {
    let signer = await getSigner();

    const starProject = new ethers.Contract(
      cardData.contract,
      enStarProject.abi,
      signer
    );

    const starTxn = await starProject.star(message);
    setAddStarLoading(true);
    await starTxn.wait();

    const count = await starProject.getTotalStars();
    setStars(count.toNumber());

    setAddStarLoading(false);
    return handleClickCloseOutlineStar();
  };

  const closeRemoveStarModal = () => setRemoveStarVisible(false);

  const removeStar = () => {
    setRemoveStarVisible(true);
  };

  const getTotalStars = async () => {
    let signer = await getSigner();

    const starProject = new ethers.Contract(
      cardData.contract,
      enStarProject.abi,
      signer
    );

    const count = await starProject.getTotalStars();
    setStars(count.toNumber());
  };

  const getStarButtons = () => {
    if (starred) {
      return (
        <AiFillStar
          size={27}
          color={'#f5a623'}
          className={styles.card__header__star}
          onClick={removeStar}
        />
      );
    }

    return (
      <AiOutlineStar
        size={27}
        color={'#f5a623'}
        className={styles.card__header__star}
        onClick={handleClickOpenOutlineStar}
      />
    );
  };

  useEffect(() => {
    getTotalStars();
  }, []);

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

          {currentAccount === undefined ? (
            <Tooltip content={cardData.tooltip} trigger="click">
              <AiOutlineStar
                size={27}
                color={'#f5a623'}
                className={styles.card__header__star}
              />
            </Tooltip>
          ) : (
            getStarButtons()
          )}

          {/* Add Star Modal */}
          <Modal
            preventClose
            closeButton
            blur
            open={addStarVisible}
            onClose={handleClickCloseOutlineStar}
          >
            <Modal.Header>
              <Text h2>Add Star</Text>
            </Modal.Header>
            <Modal.Body>
              <Input disabled value={currentAccount} label="Account" />
              <Input
                disabled
                value={`${cardData.title} - ${cardData.lang}`}
                label="Project"
              />
              <Textarea
                label="Message"
                bordered
                rows={3}
                maxRows={3}
                onChange={e => setMessage(e.target.value)}
                placeholder="Hello World..."
              />
            </Modal.Body>
            <Modal.Footer>
              <Button
                auto
                flat
                color={'error'}
                onClick={handleClickCloseOutlineStar}
              >
                Close
              </Button>
              <Button auto onClick={sendStar} shadow>
                {addStarLoading ? (
                  <Loading color={'white'} size={'sm'} type={'points'} />
                ) : (
                  'Send Star'
                )}
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Remove Star Modal */}
          <Modal
            preventClose
            closeButton
            blur
            open={removeStarVisible}
            onClose={closeRemoveStarModal}
          >
            <Modal.Header>
              <Text h3>Add Star</Text>
            </Modal.Header>
            <Modal.Body>Estrela</Modal.Body>
            <Modal.Footer>
              <Button auto flat color={'error'} onClick={closeRemoveStarModal}>
                Close
              </Button>
              <Button auto onClick={closeRemoveStarModal}>
                Send Star
              </Button>
            </Modal.Footer>
          </Modal>
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
            <strong>{stars}</strong> stars
          </Text>
        </Card.Footer>
      </Card>
    </section>
  );
};

export { Publication };
