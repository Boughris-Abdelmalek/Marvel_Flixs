import logo from "../../assets/M.svg";

import { Logo, FooterSection, Section, SectionTitle, SectionItem, Icon } from "./styles";

import marvel from "../../assets/marvel.png";
import marvelApi from "../../assets/marvelApi.png";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";

const Footer = () => {
  return (
    <FooterSection>
      <Section>
        <Logo src={logo} alt="logo" />
      </Section>
      <Section>
        <SectionTitle>Sources: </SectionTitle>
        <SectionItem to="https://www.marvel.com" target="_blank">
          <Icon src={marvel} alt="icon" />
          Marvel
        </SectionItem>
        <SectionItem to="https://developer.marvel.com/" target="_blank">
          <Icon src={marvelApi} alt="icon" />
          Marvel API
        </SectionItem>
      </Section>
      <Section>
        <SectionTitle>Follow me on</SectionTitle>
        <SectionItem to="https://www.linkedin.com/in/abdelmalek-boughris/" target="_blank">
          <Icon src={linkedin} alt="icon" />
          linkedin
        </SectionItem>
        <SectionItem to="https://github.com/Boughris-Abdelmalek" target="_blank">
        <Icon src={github} alt="icon" />
          github
        </SectionItem>
      </Section>
      <Section>
        <SectionTitle>App developed by: </SectionTitle>
        <SectionItem to="">©2023 THE MARVELVERSE</SectionItem>
      </Section>
    </FooterSection>
  );
};

export default Footer;
