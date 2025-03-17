import React from "react";

import Hero from "./Hero";
import Jobs from "./Jobs";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="bg-gray-200 mt-2">
      <Hero />
      <Jobs />
      <Contact />
    </div>
  );
};

export default Home;
