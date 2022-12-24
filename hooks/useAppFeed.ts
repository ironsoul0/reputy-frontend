import { ethers } from "ethers";
import { useEffect, useState } from "react";

import { useReputyAppContract } from "./useReputyApp";

const VALID_EVENT_TOPICS = ["RatingAdd", "RatingSub", "RatingSet"];

type TFeedEvent = {
  address: string;
  description?: string;
  direction: boolean;
  delta: number;
};

export const useAppFeed = (address?: string) => {
  const contract = useReputyAppContract(address);
  const [feed, setFeed] = useState<TFeedEvent[] | null>(null);

  useEffect(() => {
    const fetchAllEvents = async () => {
      if (contract) {
        const events = (await contract.queryFilter("*"))
          .reverse()
          .filter((e) => VALID_EVENT_TOPICS.includes(e.event || ""));

        setFeed(
          events.map((event) => ({
            address: event?.args?.[0] || "",
            direction: event.event === "RatingAdd",
            delta: ethers.BigNumber.from(event.args?.[1]).toNumber(),
          }))
        );
      }
    };

    fetchAllEvents();
  }, [contract]);

  return feed;
};
