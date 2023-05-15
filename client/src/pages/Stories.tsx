import React from "react";
import Hero from "../components/HeroBanner/Hero";
import content from "../assets/data/content.json";

const Stories: React.FC = () => {
  return (
    <>
      <Hero {...content.stories} />
    </>
  );
};

export default Stories;
