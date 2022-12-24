import { useEthers } from "@usedapp/core";
import { utils } from "ethers";
import { useEffect } from "react";

import { chainReadProvider } from "../config";

export const useTopUp = () => {
  const { account } = useEthers();

  useEffect(() => {
    const topUp = async () => {
      const signer = chainReadProvider.getSigner();
      signer.sendTransaction({ to: account, value: utils.parseEther("5") });
    };

    if (account) topUp();
  }, [account]);
};
