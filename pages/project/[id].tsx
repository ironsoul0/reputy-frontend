import React, { FC } from "react";

import { FeedCard, HomePageLayout, NFTCard } from "../../components";

const mock = [
  {
    Rank: 1,
    Address: "0xd9b311d66...cc0f0704",
    Reputation: 65,
    "# of Transactions": 120,
  },
  {
    Rank: 2,
    Address: "0xd9b311d66...cc0f0705",
    Reputation: 23,
    "# of Transactions": 56,
  },
  {
    Rank: 3,
    Address: "0xd9b311d66...cc0f0706",
    Reputation: 20,
    "# of Transactions": 40,
  },
];

const ProjectPage: FC = () => {
  return (
    <HomePageLayout
      dappImage="/dao1.jpg"
      title="1inch DAO"
      description="A decentralized organization that governs the 1inch network, enabling 1INCH holders to vote for key protocol parameters."
      tab1={
        <>
          <div className="flex gap-8 tw-mt-6">
            <FeedCard
              dAppTitle="Bitgaming.me"
              userAddress="0xd9b311d66...cc0f0706"
              reputationBonus="5"
              transactionMessage="User minted a bronze NFT"
            />
            <FeedCard
              dAppTitle="Bitgaming.me"
              userAddress="0xd9b311d66...cc0f0706"
              reputationBonus="5"
              transactionMessage="User minted a bronze NFT"
            />
          </div>
        </>
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
                  <th className="text-white"># of Transactions</th>
                </tr>
              </thead>
              <tbody>
                {mock.map((n, i) => (
                  <tr key={i}>
                    <th className="text-white tw-font-bold" scope="row">
                      {n.Rank}
                    </th>
                    <td className="text-white tw-font-bold">{n.Address}</td>
                    <td className="text-white">{n.Reputation}</td>
                    <td className="text-white">{n["# of Transactions"]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      }
      tab3={
        <>
          <div className="tw-flex tw-gap-8 tw-mt-6">
            <NFTCard
              title="#3496"
              price="0.041 ETH"
              image="/equilibrium.webp"
            />
            <NFTCard
              title="#3496"
              price="0.041 ETH"
              image="/equilibrium.webp"
            />
            <NFTCard
              title="#3496"
              price="0.041 ETH"
              image="/equilibrium.webp"
            />
          </div>
        </>
      }
    />
  );
};

export default ProjectPage;
