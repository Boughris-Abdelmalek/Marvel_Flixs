import { useNavigate } from "react-router-dom";

import {
  CardContainer,
  ImageContainer,
  Image,
  CardTextContainer,
  CardTitle,
  CardCreditContainer,
  CardCredit,
} from "./styles";

import { CardProps } from "./IProps";

const Card = ({ item, redirectUrl }: CardProps): JSX.Element => {
  const { thumbnail, title, creators } = item;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(redirectUrl);
  };

  return (
    <CardContainer onClick={handleClick}>
      <ImageContainer>
        <Image src={thumbnail} alt={title} />
      </ImageContainer>
      <CardTextContainer>
        <CardTitle>{title}</CardTitle>
        {creators && (
          <CardCreditContainer>
            <CardCredit>{creators.penciler}</CardCredit>
            <CardCredit>{creators.writer}</CardCredit>
          </CardCreditContainer>
        )}
      </CardTextContainer>
    </CardContainer>
  );
};

export default Card;
