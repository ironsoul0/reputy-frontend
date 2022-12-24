import { url } from "inspector";
import Link from "next/link";
import type { FC } from "react";

type Props = {
  title: string;
  description: string;
  image: string;
  tag: string;
  status: string;
};

export const DAOCard: FC<Props> = ({
  title,
  description,
  image,
  tag,
  status,
}) => {
  return (
    <div
      style={{ backgroundColor: "#202a30", cursor: "pointer" }}
      className="tw-relative tw-rounded-2xl tw-bg-card-blue tw-text-soft-white tw-text-lg tw-font-normal tw-shadow-xl"
    >
      <div
        className="tw-absolute tw-top-2 tw-right-2 tw-px-2 tw-py-1 tw-rounded-lg tw-z-40"
        style={{ backgroundColor: "#232627" }}
      >
        <p className="tw-text-sm tw-text-white tw-m-0">{tag}</p>
      </div>

      <div
        className="tw-block tw-relative tw-rounded-xl tw-overflow-hidden tw-bg-contain tw-bg-no-repeat"
        title="Equilibrium"
        style={{
          backgroundImage: `url(http://localhost:3000/${image})`,
          backgroundSize: "100%",
          height: 210,
        }}
      />

      <div
        className="tw-px-4 tw-py-4 tw-absolute tw-bottom-0 tw-rounded-b-xl"
        style={{
          width: "100%",
          height: 90,
          backgroundColor: "rgba(0,0,0, 0.85)",
        }}
      >
        <div className="tw-flex tw-justify-between tw-items-center tw-mb-2">
          <p className="tw-text-lg tw-font-semibold tw-text-white hover:tw-text-white tw-transition-colors tw-duration-1000 tw-m-0">
            {title}
          </p>
          <p
            style={{ zIndex: 100, color: "#9fef00", fontSize: 14 }}
            className="tw-font-semibold hover:tw-text-white tw-transition-colors tw-duration-1000 tw-m-0"
          >
            {status}
          </p>
        </div>

        <p className="text-white tw-text-sm tw-tracking-wide tw-m-0">
          {description}
        </p>
      </div>
    </div>
  );
};
