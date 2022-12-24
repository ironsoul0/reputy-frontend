import { ethers } from "ethers";
import { useEffect, useState } from "react";

import { useReputyAppContract } from "./useReputyApp";

type TRankingEntry = {
  address: string;
  rating: number;
};

export const useAppRanking = (address?: string) => {
  const contract = useReputyAppContract(address);
  const [ranking, setRanking] = useState<TRankingEntry[] | null>(null);

  useEffect(() => {
    const fetchRanking = async () => {
      if (contract) {
        const users = (await contract.getUsers()).map(
          (user: { user: string; rating: string }) => ({
            address: user.user,
            rating: ethers.BigNumber.from(user.rating).toNumber(),
          })
        ) as TRankingEntry[];

        users.sort((x, y) => y.rating - x.rating);

        setRanking(users);
      }
    };

    fetchRanking();
  }, [contract]);

  return ranking;
};
