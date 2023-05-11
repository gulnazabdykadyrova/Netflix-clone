import React from "react";

import Main from "../components/Main";
import Raw from "../components/Raw";
import requests from "../Requests";

const Home = () => {
  return (
    <div>
      <Main />
      <Raw rowID="1" title="Up Coming" fetchUrl={requests.requestUpcoming} />
      <Raw rowID="2" title="Popular" fetchUrl={requests.requestPopular} />
      <Raw rowID="3" title=" Trending" fetchUrl={requests.requestTrending} />
      <Raw rowID="4" title="Top Rated" fetchUrl={requests.requestTopRated} />
    </div>
  );
};

export default Home;
