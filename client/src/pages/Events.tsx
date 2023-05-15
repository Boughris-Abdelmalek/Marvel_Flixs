import React from "react";
import Hero from "../components/HeroBanner/Hero";
import content from "../assets/data/content.json";

const Events: React.FC = () => {
  return (
    <>
      <Hero {...content.events} />
    </>
  );
};

export default Events;
