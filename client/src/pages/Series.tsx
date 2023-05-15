import React from "react";
import Hero from "../components/HeroBanner/Hero";
import content from "../assets/data/content.json";

const Series: React.FC = () => {
  return (
    <>
      <Hero {...content.series} />
    </>
  );
};

export default Series;
