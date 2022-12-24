import { useEthers } from "@usedapp/core";
import { Contract } from "ethers";
import { useEffect, useMemo, useState } from "react";

import { chainReadProvider, ReputyAppContract } from "../config";

export type TReputyApp = {
  name: string;
  description: string;
  link: string;
  tag: string;
  image: string;
  address: string;
  rating?: number;
};

export const fetchInfoFromApp = async (
  address: string,
  account?: string
): Promise<TReputyApp> => {
  const contract = new Contract(
    address,
    ReputyAppContract.abi,
    chainReadProvider
  );

  const appConfig = await contract.appConfig();
  const rating = account
    ? (await contract.userRating(account)).toNumber()
    : undefined;

  return {
    name: appConfig.name,
    description: appConfig.description,
    link: appConfig.link,
    tag: appConfig.tag,
    image: appConfig.logoURI,
    address,
    rating,
  };
};

export const useReputyAppContract = (address?: string): Contract | null => {
  const contract = useMemo(
    () =>
      address
        ? new Contract(address, ReputyAppContract.abi, chainReadProvider)
        : null,
    [address]
  );

  return contract;
};

export const useReputyApp = (
  address?: string
): { appInfo: TReputyApp | null; contract: Contract | null } => {
  const { account } = useEthers();
  const [appInfo, setAppInfo] = useState<TReputyApp | null>(null);
  const contract = useReputyAppContract(address);

  useEffect(() => {
    const fetchAppInfo = async () => {
      const info = await fetchInfoFromApp(address as string, account);
      setAppInfo(info);
    };

    if (contract) {
      fetchAppInfo();
    }
  }, [contract, account, address]);

  return { appInfo, contract };
};
