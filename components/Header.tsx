import Link from "next/link";
import type { FC } from "react";

import { Logo } from "./Logo";

export const Header: FC = () => {
  return (
    <div className="tw-flex tw-py-6 tw-items-center tw-justify-between">
      <Logo className="tw-w-12 tw-h-12" />
      <div className="tw-flex tw-items-center tw-gap-4">
        <Link
          href="/"
          className="tw-no-underline tw-outline-none tw-text-white tw-mr-4"
          style={{ color: "white" }}
        >
          Create
        </Link>
        <Link
          href="/"
          className="tw-no-underline tw-outline-none tw-text-white"
          style={{ color: "white" }}
        >
          About
        </Link>
      </div>
    </div>
  );
};
