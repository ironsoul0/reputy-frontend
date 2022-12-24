import { useEthers } from "@usedapp/core";
import clsx from "clsx";
import { useRouter } from "next/router";
import React, { FC } from "react";

import { FeedCard, HomePageLayout, NFTCard, Spinner } from "../../components";
import { blockExplorer } from "../../config";
import { useAppFeed, useAppRanking, useReputyApp } from "../../hooks";

const ProjectPage: FC = () => {
  const { account } = useEthers();
  const router = useRouter();
  const appAddress = router.query.id as string;
  const { appInfo } = useReputyApp(appAddress);
  const feed = useAppFeed(appAddress);
  const ranking = useAppRanking(appAddress);

  return appInfo ? (
    <HomePageLayout
      dappImage={appInfo.image}
      title={appInfo.name}
      description={appInfo.description}
      rating={appInfo.rating}
      tag={appInfo.tag}
      tab1={
        <div className="flex tw-mt-6">
          {feed &&
            feed.map((feedEntry, i) => (
              <FeedCard
                key={i}
                dAppTitle={appInfo.name}
                userAddress={`${feedEntry.address.substring(0, 15)}...`}
                reputationBonus={feedEntry.delta.toString()}
                reputationChangeDirection={feedEntry.direction}
              />
            ))}
        </div>
      }
      tab2={
        <>
          <div className="tw-mt-6">
            <table className="table table-borderless">
              <thead>
                <tr>
                  <th className="text-white">Rank</th>
                  <th className="text-white">Address</th>
                  <th className="text-white">Reputation</th>
                </tr>
              </thead>
              <tbody>
                {ranking?.map((n, i) => (
                  <tr
                    key={i}
                    className={clsx(
                      n.address === account ? "tw-text-green-550" : "text-white"
                    )}
                  >
                    <td>{i + 1}</td>
                    <td>
                      <a
                        href={`${blockExplorer}/${n.address}`}
                        target="_blank"
                        rel="noreferrer"
                        className={clsx(
                          n.address === account
                            ? "tw-text-green-550"
                            : "text-white"
                        )}
                      >
                        {n.address.substring(0, 15)}...
                      </a>
                    </td>
                    <td>{n.rating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      }
      tab3={
        <div className="tw-flex tw-gap-8 tw-mt-6">
          <NFTCard title="#3496" price="0.041 ETH" image="/equilibrium.webp" />
          <NFTCard title="#3496" price="0.041 ETH" image="/equilibrium.webp" />
          <NFTCard title="#3496" price="0.041 ETH" image="/equilibrium.webp" />
        </div>
      }
    />
  ) : (
    <Spinner className="tw-text-white tw-w-6" />
  );
};

export default ProjectPage;
