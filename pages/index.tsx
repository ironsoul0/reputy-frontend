import { FC } from "react";

import { DAOCard } from "../components/DAOCard";

const projects = [
  {
    title: "Bitgaming.me",
    description: "Play-To-Earn game",
    image: "app1.png",
    tag: "Games",
    status: "Launched",
  },
  {
    title: "Uniswap",
    description: "Crypto exchange platform",
    image: "app2.jpeg",
    tag: "Exchange",
    status: "Launched",
  },
  {
    title: "Mummy",
    description: "The Next Gen Ancient World.",
    image: "app3.png",
    tag: "Games",
    status: "Coming soon",
  },
  {
    title: "Ultiverse",
    description: "Connecting Web3 through a AAA Gaming metaverse",
    image: "app4.png",
    tag: "Games",
    status: "Coming soon",
  },
  {
    title: "EX Sports",
    description:
      "EX Sport Starz - platform that allows sport fans to trade digital assets.",
    image: "app5.png",
    tag: "Sport",
    status: "Launched",
  },
  {
    title: "Neo Fantasy",
    description: "Play With Courage & Benefit!",
    image: "app6.png",
    tag: "Games",
    status: "Coming soon",
  },
];

const App: FC = () => {
  return (
    <div>
      <p className="tw-text-white tw-text-3xl tw-font-bold tw-mb-8">Apps</p>
      <div className="tw-grid tw-grid-cols-1 tw-gap-7 md:tw-grid-cols-2">
        {projects.map((n, i) => (
          <DAOCard {...n} key={i} />
        ))}
      </div>
    </div>
  );
};

export default App;
