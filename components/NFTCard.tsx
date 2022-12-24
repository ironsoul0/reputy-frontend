import type { FC } from "react";

type Props = {
  title: string;
  price: string;
  image: string;
};

export const NFTCard: FC<Props> = ({ title, price, image }) => {
  return (
    <div
      style={{ width: 250, backgroundColor: "#202a30" }}
      className="tw-rounded-2xl tw-bg-card-blue tw-h-max tw-text-soft-white tw-text-lg tw-font-normal tw-mb-16 md:tw-mb-0 tw-shadow-xl"
    >
      <a
        className="tw-block tw-relative tw-rounded-t-xl tw-overflow-hidden"
        title="Equilibrium"
      >
        <div className="tw-absolute tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center hover:tw-bg-cyan tw-opacity-0 hover:tw-opacity-100 tw-bg-opacity-0 hover:tw-bg-opacity-70 tw-transition-opacity tw-duration-700">
          <img src="/icon-view.svg" className="tw-w-14" alt="View icon" />
        </div>
        <img
          src={image}
          style={{ width: 250, height: 200 }}
          alt="Equilibrium"
        />
      </a>

      <div className="p-3">
        <div className="tw-text-2xl tw-font-semibold tw-mb-4">
          <a
            style={{ textDecoration: "none" }}
            className="tw-text-white hover:tw-text-white tw-transition-colors tw-duration-1000"
          >
            {title}
          </a>
        </div>

        <div>
          <p
            style={{ color: "#c7d2da" }}
            className="mb-1 tw-text-white tw-text-xs"
          >
            Примерная стоимость
          </p>
          <div className="tw-flex tw-items-center tw-text-white">
            <img src="/icon-ethereum.svg" alt="Ethereum icon" />
            <p className="tw-text-sm tw-font-semibold tw-tracking-wide tw-ml-1 tw-m-auto">
              {price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
