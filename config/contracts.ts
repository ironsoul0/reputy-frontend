import { ChainId } from "@usedapp/core";

import ReputyApp from "./abi/ReputyApp.json";
import ReputyRegistry from "./abi/ReputyRegistry.json";
import { ChainIDUrl, TARGET_CHAIN } from "./chains";

const registryAddresses: ChainIDUrl = {
  [ChainId.Hardhat]: "0xf953b3A269d80e3eB0F2947630Da976B896A8C5b",
  [ChainId.Goerli]: "0x2C04c3Faf3040eA42A6887eC230Cf0a397eb28a2",
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