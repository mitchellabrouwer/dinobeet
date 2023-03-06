import { useRouter } from "next/router";
import React, {
  Dispatch,
  forwardRef,
  MutableRefObject,
  SetStateAction,
  useState,
} from "react";
import Confetti from "react-confetti";
import useWindowSize from "../../lib/hooks/useWindowSize";
import { ReviewForm } from "../review/ReviewForm";
import { Button } from "./Button";
import { Heading } from "./Heading";

interface ModalProps {
  ref: MutableRefObject<any>;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  recipeName: string;
  recipeId: string;
}

const PartyModal: React.FC<ModalProps> = forwardRef(
  ({ isOpen, setIsOpen, title, recipeName, recipeId }, ref) => {
    const [showReview, setShowReview] = useState(false);
    const { width, height } = useWindowSize();
    const [party, setParty] = useState(true);
    const router = useRouter();
    return (
      <div>
        {isOpen && (
          <div
            id="popup-modal"
            tabIndex={-1}
            className="fixed top-0 left-0 right-0 z-50 h-full overflow-x-hidden overflow-y-scroll p-4 pb-0 md:inset-0 md:h-full"
          >
            <div
              className="relative m-auto h-full w-full max-w-md md:h-auto"
              ref={ref}
            >
              <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
                <div className="flex justify-between align-middle">
                  <h3 className="pt-4 pl-4 text-lg font-normal text-gray-500 dark:text-gray-400">
                    Congratulations you made
                  </h3>
                  <button
                    type="button"
                    className="absolute top-3 right-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
                    data-modal-hide="popup-modal"
                    onClick={() => setIsOpen(false)}
                  >
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-6 text-center">
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
                    onConfettiComplete={() => setParty(false)}
                  />

                  <Heading as="h2">{recipeName}</Heading>
                  <div className="md:flex md:space-x-2">
                    <Button onClick={() => setShowReview(!showReview)}>
                      ✏️ Review?
                    </Button>
                    <Button onClick={() => router.push("/dashboard/browse")}>
                      😛 Eat more
                    </Button>
                  </div>
                  {showReview && <ReviewForm recipeId={recipeId} />}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
);

export default PartyModal;
