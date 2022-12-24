import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";

import type { AppProps } from "next/app";

import { Header } from "../components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="tw-text-white">
      <div className="tw-px-4 tw-mx-auto tw-max-w-4xl tw-mb-10">
        <Header />
        <Component {...pageProps} />
      </div>
    </div>
  );
}
