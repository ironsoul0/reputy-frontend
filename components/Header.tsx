import { useEthers } from "@usedapp/core";
import Link from "next/link";
import type { FC } from "react";

import { isValidChain, TARGET_CHAIN } from "../config";
import { Logo } from "./Logo";

export const Header: FC = () => {
  const { activateBrowserWallet, account, deactivate, chainId, switchNetwork } =
    useEthers();

  const handleConnectWallet = () => {
    if (!account) {
      activateBrowserWallet();
    } else {
      if (isValidChain(chainId)) {
        deactivate();
      } else {
        switchNetwork(TARGET_CHAIN);
      }
    }
  };

  return (
    <div className="tw-flex tw-py-6 tw-items-center tw-justify-between">
      <Link href="/">
        <a className="logo-link">
          <Logo className="tw-w-12 tw-h-12" />
        </a>
      </Link>
      <div className="tw-flex tw-items-center tw-gap-4">
        <Link
          href="/project/create"
          className="tw-no-underline tw-outline-none tw-text-white tw-mr-4"
          style={{ color: "white" }}
        >
          <a>Create</a>
        </Link>
        <Link
          href="/about"
          className="tw-no-underline tw-outline-none tw-text-white"
          style={{ color: "white" }}
        >
          <a>About</a>
        </Link>
        <button
          onClick={handleConnectWallet}
          className="tw-border tw-px-2 tw-py-1 tw-rounded tw-border-opacity-10 hover:tw-opacity-80 tw-transition-opacity"
        >
          {!account && "Connect"}
          {account &&
            (isValidChain(chainId)
              ? `${account.substring(0, 7)}...`
              : "Please connect to Goerli")}
        </button>
      </div>
    </div>
  );
};
