import { useEthers } from "@usedapp/core";
import { Contract } from "ethers";
import { useCallback, useEffect, useState } from "react";

import { chainReadProvider, ReputyAppContract } from "../config";
import { useRegistryContract } from "./useRegistryContract";

type TReputyApp = {
  name: string;
  description: string;
  tag: string;
  image: string;
  address: string;
  rating?: number;
};

export const useReputyApps = () => {
  const registryContract = useRegistryContract();
  const { account } = useEthers();
  const [apps, setApps] = useState<TReputyApp[] | null>(null);

  const fetchInfoFromApp = useCallback(
    async (address: string): Promise<TReputyApp> => {
      const contract = new Contract(
        address,
        ReputyAppContract.abi,
        chainReadProvider
      );

      const appConfig = await contract.appConfig();
      const rating = account
        ? (await contract.userRating(account)).toNumber()
        : undefined;

      console.log("appConfig", appConfig);

      return {
        name: appConfig.name,
        description: appConfig.description,
        tag: appConfig.tag,
        image: appConfig.logoURI,
        address,
        rating,
      };
    },
    [account]
  );

  const fetchFromContract = useCallback(async () => {
    const apps = await registryContract.getApps();

    const appsInfo = await Promise.all(
      apps.map(async (app: string) => {
        return await fetchInfoFromApp(app);
      })
    );

    setApps(appsInfo);
  }, [registryContract, fetchInfoFromApp]);

  useEffect(() => {
    if (registryContract) {
      fetchFromContract();
    }
  }, [fetchFromContract, registryContract]);

  return apps;
};
