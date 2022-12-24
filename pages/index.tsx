import { FC } from "react";

import { Spinner } from "../components";
import { DAOCard } from "../components/DAOCard";
import { useReputyApps } from "../hooks";

const App: FC = () => {
  const apps = useReputyApps();

  return (
    <div>
      <p className="tw-text-white tw-text-3xl tw-font-bold tw-mb-8">Apps</p>
      {apps ? (
        <div className="tw-grid tw-grid-cols-1 tw-gap-7 md:tw-grid-cols-2 tw-animate-smooth-appear">
          {apps.map((n, i) => (
            <DAOCard {...n} key={i} />
          ))}
        </div>
      ) : (
        <Spinner className="tw-text-white tw-w-6" />
      )}
    </div>
  );
};

export default App;
