import clsx from "clsx";
import type { FC } from "react";

type Props = {
  dAppTitle: string;
  userAddress: string;
  reputationBonus: number | string;
  reputationChangeDirection?: boolean;
  transactionMessage?: string;
};

export const FeedCard: FC<Props> = ({
  dAppTitle,
  userAddress,
  reputationBonus,
  reputationChangeDirection,
  transactionMessage,
}) => {
  return (
    <div
      style={{ backgroundColor: "rgba(32,42,48,0.5)" }}
      className="tw-rounded-2xl tw-bg-card-blue tw-h-max tw-text-soft-white tw-text-lg tw-font-normal tw-mb-6 tw-shadow-xl"
    >
      <div className="p-3 tw-flex tw-justify-between">
        <div>
          <p className="tw-text-lg tw-font-semibold tw-transition-colors tw-duration-1000 tw-m-0 tw-text-green-550">
            {dAppTitle}
          </p>
          <p className="tw-text-sm tw-font-semibold tw-text-white hover:tw-text-white tw-transition-colors tw-duration-1000 tw-m-0">
            {userAddress}
          </p>
        </div>

        <div className="tw-flex tw-flex-col tw-justify-end tw-items-end">
          <p style={{ color: "#c7d2da" }} className="mb-1 tw-text-sm">
            {transactionMessage || "User interacted with a protocol"}
          </p>
          <p
            className={clsx(
              "tw-text-sm tw-text-white tw-font-semibold tw-tracking-wide tw-ml-1 tw-m-auto tw-mr-0",
              reputationChangeDirection
                ? "tw-text-green-550"
                : "tw-text-red-500"
            )}
          >
            {reputationChangeDirection ? "+" : "-"}
            {reputationBonus} REP
          </p>
        </div>
      </div>
    </div>
  );
};
