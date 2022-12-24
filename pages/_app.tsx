import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";

import { ChainId, Config, DAppProvider } from "@usedapp/core";
import type { AppProps } from "next/app";

import { Header } from "../components";
import { Multicall, readOnlyUrls } from "../config";

const config: Config = {
  readOnlyUrls: { ...readOnlyUrls },
  supportedChains: [
    ChainId.Mainnet,
    ChainId.Kovan,
    ChainId.Rinkeby,
    ChainId.Ropsten,
    ChainId.Goerli,
    ChainId.Localhost,
    ChainId.Hardhat,
  ],
  multicallAddresses: {
    [ChainId.Hardhat]: Multicall[ChainId.Hardhat],
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DAppProvider config={config}>
      <div className="tw-text-white">
        <div className="tw-px-4 tw-mx-auto tw-max-w-4xl tw-mb-10">
          <Header />
          <Component {...pageProps} />
        </div>
      </div>
    </DAppProvider>
  );
}
