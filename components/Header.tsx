import { useEthers } from "@usedapp/core";
import Link from "next/link";
import type { FC } from "react";

import { Logo } from "./Logo";

export const Header: FC = () => {
  const { activateBrowserWallet, account, deactivate } = useEthers();

  return (
    <div className="tw-flex tw-py-6 tw-items-center tw-justify-between">
      <Link href="/">
        <a className="logo-link">
          <Logo className="tw-w-12 tw-h-12" />
        </a>
      </Link>
      <div className="tw-flex tw-items-center tw-gap-4">
        <Link
          href="/create"
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
          onClick={!account ? activateBrowserWallet : deactivate}
          className="tw-border tw-px-2 tw-py-1 tw-rounded tw-border-opacity-10 hover:tw-opacity-80 tw-transition-opacity"
        >
          {account ? `${account.substring(0, 7)}...` : "Connect"}
        </button>
      </div>
    </div>
  );
};
