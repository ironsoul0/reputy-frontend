import { FC } from "react";
import { DAOCard } from "../components/DAOCard";

const projects = [
  {
    title: "Bitgaming.me",
    capital: "268 mln $",
    image: "bitgaming.png",
  },
  {
    title: "Uniswap",
    capital: "659 mln $",
    image: "uniswap.jpeg",
  },
  {
    title: "Uniswap",
    capital: "659 mln $",
    image: "uniswap.jpeg",
  },
]

const App: FC = () => {
  return (
    <div className="container tw-mt-12">
      <p className="tw-text-white tw-text-3xl tw-font-bold tw-mb-8">
        The library of decentralized apps
      </p>
      <div className="row">
        {
          projects.map((n, i) => (
            <div key={i} className="col-3">
              <DAOCard title={n.title} price={n.capital} image={n.image} />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default App;
