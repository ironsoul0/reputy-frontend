import { useEthers } from "@usedapp/core";
import { useCallback, useEffect, useState } from "react";

import { useRegistryContract } from "./useRegistryContract";
import { fetchInfoFromApp, TReputyApp } from "./useReputyApp";

export const useReputyApps = () => {
  const registryContract = useRegistryContract();
  const { account } = useEthers();
  const [apps, setApps] = useState<TReputyApp[] | null>(null);

  const fetchFromContract = useCallback(async () => {
    const apps = await registryContract.getApps();

    const appsInfo = await Promise.all(
      apps.map(async (app: string) => {
        return await fetchInfoFromApp(app, account);
      })
    );

    setApps(appsInfo);
  }, [registryContract, account]);

  useEffect(() => {
    if (registryContract) {
      fetchFromContract();
    }
  }, [fetchFromContract, registryContract]);

  return apps;
};
