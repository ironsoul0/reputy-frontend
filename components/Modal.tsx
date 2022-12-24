import clsx from "clsx";
import { useRouter } from "next/router";
import React from "react";

import { blockExplorer } from "../config";

type Props = {
  handleClick?: () => void;
  showModal: boolean;
  setShowModal: (x: boolean) => void;
  contractAddress: string;
};

export const Modal: React.FC<Props> = ({
  showModal,
  setShowModal,
  contractAddress,
}) => {
  const router = useRouter();

  return (
    <div
      className={clsx(
        "tw-flex tw-items-center tw-justify-center tw-h-screen tw-bg-gray-200 tw-modal-body tw-absolute",
        showModal && "modal-active"
      )}
    >
      {/* <button className="px-4 py-2 font-bold text-gray-500 bg-transparent border border-gray-500 rounded-full modal-open hover:border-indigo-500 hover:text-indigo-500">
        Open Modal
      </button> */}
      <div
        className={clsx(
          "tw-fixed tw-top-0 tw-left-0 tw-flex tw-items-center tw-justify-center tw-w-full tw-h-full modal",
          !showModal && "tw-opacity-0 tw-pointer-events-none"
        )}
      >
        <div
          className="tw-absolute tw-w-full tw-h-full tw-bg-gray-900 tw-opacity-50 modal-overlay"
          onClick={() => {
            setShowModal(false);
            router.push("/");
          }}
        ></div>

        <div className="tw-z-50 tw-w-11/12 tw-mx-auto tw-overflow-y-auto tw-bg-white tw-rounded tw-shadow-lg modal-container md:tw-max-w-lg">
          {/* <div className="absolute top-0 right-0 z-50 flex flex-col items-center mt-4 mr-4 text-sm text-white cursor-pointer modal-close">
            <svg
              className="text-white fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
            </svg>
            <span className="text-sm">(Esc)</span>
          </div> */}

          <div className="tw-px-6 tw-py-4 tw-text-left modal-content tw-text-black">
            <div className="tw-flex tw-items-center tw-justify-between tw-pb-3">
              <p className="tw-text-2xl tw-font-bold">Congratulations!</p>
              {/* <div className="z-50 cursor-pointer modal-close">
                <svg
                  className="text-black fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                </svg>
              </div> */}
            </div>

            <p>You are now a part of the Reputy DAO!</p>
            <p>
              You can check out your newly deployed rating smart contract on
              Etherscan.
            </p>

            <div className="tw-flex tw-justify-end tw-pt-2">
              <a
                className="tw-p-3 tw-px-4 tw-mr-2 tw-text-indigo-500 tw-bg-transparent tw-rounded-lg hover:tw-bg-gray-100 hover:tw-text-indigo-400"
                href={`${blockExplorer}/address/${contractAddress}`}
                target="_blank"
                rel="noreferrer"
              >
                Etherscan
              </a>
              <button
                className="tw-p-3 tw-px-4 tw-text-white tw-bg-indigo-500 tw-rounded-lg modal-close hover:tw-bg-indigo-400"
                onClick={() => {
                  setShowModal(false);
                  router.push("/");
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
