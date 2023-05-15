import React from "react";
import { IHeroProps } from "./IHero";
import { HeroSection } from "./HeroStyles";

const Hero: React.FC<IHeroProps> = ({ banner, title, description }) => {
  return (
    <HeroSection backgroundImage={banner}>
      <h3>{title}</h3>
      <h5>{description}</h5>
    </HeroSection>
  );
};

export default Hero;
