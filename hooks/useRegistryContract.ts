import { useEthers } from "@usedapp/core";
import { Contract } from "ethers";
import { useMemo } from "react";

import { chainReadProvider, RegistryContract } from "../config";

export const useRegistryContract = () => {
  const { library } = useEthers();

  const contract = useMemo(() => {
    return new Contract(
      RegistryContract.address,
      RegistryContract.abi,
      library && "getSigner" in library
        ? library.getSigner()
        : chainReadProvider
    );
  }, [library]);

  return contract;
};
