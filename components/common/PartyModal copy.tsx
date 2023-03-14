import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import useWindowSize from "../hooks/useWindowSize";
import { ReviewForm } from "../private/review/ReviewForm";

interface ModalProps {
  title: string;
  recipeName: string;
  recipeId: string;
}

const PartyModal: React.FC<ModalProps> = ({ title, recipeName, recipeId }) => {
  const [showReview, setShowReview] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { width, height } = useWindowSize();
  const [party, setParty] = useState(true);
  const router = useRouter();

  useEffect(() => {
    onOpen();
  }, []);

  const onCloseHandler = () => {
    onClose();
    setParty(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={onCloseHandler}>
      {/* <Box ref={partyLocation} h="5" w="5"></Box> */}
      <ModalOverlay />
      <ModalContent>
        <Confetti
          width={width}
          height={height}
          confettiSource={{
            w: 10,
            h: 10,
            x: 0,
            y: 0,
          }}
          style={{ pointerEvents: "none" }}
          numberOfPieces={party ? 500 : 0}
          recycle={false}
          onConfettiComplete={(_) => setParty(false)}
        />
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pt="0">
          <Text as="i">Congratulations you finished cooking {recipeName}</Text>
          <HStack my="5">
            <Button
              colorScheme="primary"
              onClick={() => setShowReview(!showReview)}
            >
              ✏️ Review?
            </Button>
            <Button
              colorScheme="primary"
              mr={3}
              onClick={() => router.push("/browse")}
              variant="ghost"
            >
              😛 Eat more
            </Button>
          </HStack>

          {showReview && <Divider my="3" />}
          {showReview && <ReviewForm recipeId={recipeId} />}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default PartyModal;
