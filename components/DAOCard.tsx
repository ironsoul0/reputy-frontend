import clsx from "clsx";
import Link from "next/link";
import type { FC } from "react";

type Props = {
  name: string;
  description: string;
  image: string;
  tag: string;
  address: string;
  rating?: number;
};

export const DAOCard: FC<Props> = ({
  name,
  description,
  image,
  tag,
  rating,
  address,
}) => {
  return (
    <Link href={`/project/${address}`}>
      <a
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
            backgroundImage: `url(${image})`,
            backgroundSize: "100%",
            height: 210,
          }}
        />

        <div
          className="tw-px-4 tw-py-4 tw-absolute tw-bottom-0 tw-rounded-b-xl"
          style={{
            width: "100%",
            backgroundColor: "rgba(0,0,0, 0.85)",
          }}
        >
          <div className="tw-flex tw-justify-between tw-items-center tw-mb-2">
            <p className="tw-text-lg tw-font-semibold tw-text-white hover:tw-text-white tw-transition-colors tw-duration-1000 tw-m-0">
              {name}
            </p>
            <p
              style={{ zIndex: 100, fontSize: 14 }}
              className={clsx(
                "tw-font-semibold tw-transition-colors tw-duration-1000 tw-m-0 tw-text-red-500",
                rating !== undefined && "tw-text-green-550"
              )}
            >
              {rating !== undefined ? `My rating: ${rating}` : "No rating"}
            </p>
          </div>

          <p className="text-white tw-text-sm tw-tracking-wide tw-m-0">
            {description}
          </p>
        </div>
      </a>
    </Link>
  );
};
