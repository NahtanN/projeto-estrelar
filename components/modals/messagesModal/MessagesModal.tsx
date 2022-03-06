import { Button, Card, Link, Modal, Text } from '@nextui-org/react';
import moment from 'moment';
import { useContext, useEffect, useState } from 'react';
import { MessagesType } from '../../../@Types';
import { CheckWalletContext } from '../../../contexts';
import { CardDataType } from '../../../services';

const MessagesModal = ({ cardData }: { cardData: CardDataType }) => {
  const { connectContract } = useContext(CheckWalletContext);
  const [messagesVisibility, setMessagesVisibility] = useState(false);
  const [starsCleaned, setStarsCleaned] = useState<MessagesType[]>([]);

  const getAllStars = async () => {
    const contract = await connectContract(
      cardData.contract,
      cardData.contractJson.abi
    );

    const allStars = await contract.getAllStars();
    setStarsCleaned([]);

    allStars.map((star: any, index: number) => {
      let addressFirstChars = star.account.slice(0, 6).toLowerCase();
      let addressLastChars = star.account.slice(-6, -1).toLowerCase();

      let newStar = {
        address: `${addressFirstChars}...${addressLastChars}`,
        message: star.mesage,
        timestamp: moment(star.timestamp * 1000).format('MMM DD, YYYY'),
      };

      if (index >= 1) {
        return setStarsCleaned(star => [...star, newStar]);
      }

      return setStarsCleaned([newStar]);
    });
  };

  const handleClickOpenMessages = async () => {
    setMessagesVisibility(true);
    await getAllStars();
  };
  const handleClickCloseMessages = () => setMessagesVisibility(false);

  return (
    <>
      <Link block color={'primary'} onClick={handleClickOpenMessages}>
        <p>
          <i>messages</i>
        </p>
      </Link>
      <Modal
        width="700px"
        closeButton
        blur
        open={messagesVisibility}
        onClose={handleClickCloseMessages}
      >
        <Modal.Header>
          <Text h3>{cardData.title} Messages</Text>
        </Modal.Header>
        <Modal.Body>
          {starsCleaned !== undefined
            ? starsCleaned
                .slice()
                .reverse()
                .map((star, index: number) => {
                  let borderRadius;

                  if (index === 0) {
                    borderRadius = '14px 14px 0 0';
                  } else if (index === starsCleaned.length - 1) {
                    borderRadius = ' 0 0 14px 14px';
                  } else {
                    borderRadius = '0';
                  }

                  return (
                    <Card
                      key={index}
                      style={{
                        margin: 0,
                        borderRadius,
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}
                      >
                        <Text h4>{star.address}</Text>
                        <Text h6>{star.timestamp}</Text>
                      </div>
                      <Text>{star.message}</Text>
                    </Card>
                  );
                })
            : 'No messages yet!'}
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color={'error'} onClick={handleClickCloseMessages}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export { MessagesModal };
