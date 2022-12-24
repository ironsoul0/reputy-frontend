import { useEthers } from "@usedapp/core";
import axios from "axios";
import { useEffect, useState } from "react";

import { useReputyAppContract } from "./useReputyApp";

const API_URL = "https://testnets-api.opensea.io/api/v1";

export const useNFTInfo = (address?: string, rating?: number) => {
  const { account } = useEthers();
  const contract = useReputyAppContract(address);
  const [openseaSlug, setOpenseaSlug] = useState<string>("");
  const [nftIndex, setNftIndex] = useState<string>("");

  useEffect(() => {
    const fetchOpenseaSlug = async () => {
      const { data } = await axios.get(`${API_URL}/asset_contract/${address}`);
      setOpenseaSlug(data.collection.slug);
    };

    if (address) fetchOpenseaSlug();
  }, [address]);

  useEffect(() => {
    const fetchNFTIndex = async () => {
      if (contract && rating) {
        const tokenIndex = await contract.tokenOfOwnerByIndex(account, 0);
        setNftIndex(tokenIndex.toString());
      }
    };

    fetchNFTIndex();
  }, [contract, rating, account]);

  return { openseaSlug, nftIndex };
};
