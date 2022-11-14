import React from "react";
import WhatToWatchComp from "./WhatToWatchComp";
import topPicksData from "../../utilities/topPicksData";
import { useSelector } from "react-redux/es/hooks/useSelector";

const WhatToWatchSec = () => {
  const topMovies = useSelector((state) => state.movies.movies);
  const favMovies = useSelector((state) => state.movies.favMovies);

  return (
    <div className="mt-28">
      <h1 className=" text-4xl text-yellow-500 font-roboto font-bold pl-6 mb-10">
        What to watch
      </h1>
      <WhatToWatchComp
        title="Top picks"
        subtitle="Tv shows and movies just for you"
        topPicksData={topMovies}
      />
      <WhatToWatchComp title="From your Watchlist" watchlist={true} />
      <WhatToWatchComp
        title="Fan favorites"
        subtitle="This week's top TV and movies"
        topPicksData={favMovies}
      />
    </div>
  );
};

export default WhatToWatchSec;
