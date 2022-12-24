import { ChainId } from "@usedapp/core";

import ReputyApp from "./abi/ReputyApp.json";
import ReputyRegistry from "./abi/ReputyRegistry.json";
import { ChainIDUrl, TARGET_CHAIN } from "./chains";

const registryAddresses: ChainIDUrl = {
  [ChainId.Hardhat]: "0x46d4674578a2daBbD0CEAB0500c6c7867999db34",
  [ChainId.Goerli]: "0x7CCdF96E7A069D17BE8A0a5387fAC9850f57fd5b",
};

export const RegistryContract = {
  abi: ReputyRegistry.abi,
  address: registryAddresses[TARGET_CHAIN],
};

export const ReputyAppContract = {
  abi: ReputyApp.abi,
};

export const Multicall = {
  [ChainId.Hardhat]: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
};
