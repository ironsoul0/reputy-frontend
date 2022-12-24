import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import { ChainId, Config, DAppProvider } from "@usedapp/core";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";

import { Header } from "../components";
import { Multicall, readOnlyUrls } from "../config";

const config: Config = {
  readOnlyUrls: { ...readOnlyUrls },
  multicallAddresses: {
    [ChainId.Hardhat]: Multicall[ChainId.Hardhat],
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DAppProvider config={config}>
      <ToastContainer />
      <div className="tw-text-white">
        <div className="tw-px-4 tw-mx-auto tw-max-w-4xl tw-mb-10">
          <Header />
          <Component {...pageProps} />
        </div>
      </div>
    </DAppProvider>
  );
}
